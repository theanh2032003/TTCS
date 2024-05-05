import React, { useState, useEffect, useRef } from "react";
import style from "./MessagePage.module.scss";
import { Avatar } from "@mui/material";
import MessageOption from "../MessageOption/MessageOption";
import SendIcon from "@mui/icons-material/Send";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import {
  getMessagesOfGroupChat,
  sendMessage,
  changeMessage,
} from "../service/chatService";
import { getInfo } from "../service/userService";
import Stomp from "stompjs";
import SockJS from "sockjs-client";

const MessagePage = () => {
  const contentRef = useRef(null);
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [inputImages, setInputImages] = useState([]);
  const { userId } = useParams();
  const userId2 = localStorage.getItem("userId");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState();
  const [stompClient, setStompClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  let id1 = (userId > userId2)? userId2:userId;
  let id2 = (userId < userId2)? userId2:userId;

  const handleInsertImage = () => {
    let input = document.getElementById("imageInput");
    if (input) {
      input.click();
    }
  };

  const getUser = async () => {
    console.log(userId);
    console.log(userId2);
    let res = await getInfo(userId);
    console.log(res.data);
    setUser(res.data);
  };

  const getMessages = async () => {
    console.log(userId);
    let res = await getMessagesOfGroupChat(userId);
    console.log(res.data);
    setMessages(res.data);
  };

  const send = async () => {
    const formData = new FormData();
    formData.append("content", content);
    formData.append("receiver", userId);
    formData.append("sender", userId2);
    formData.append("images", inputImages);

    let res = await sendMessage(formData);
    // console.log(res.data.id);
    // setMessages([...messages, res.data]);
  };

  const handleSendMessage = () => {
    send();
    setContent("");
    setImages([]);
    setInputImages([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleImageInput = (e) => {
    const files = e.target.files;
    console.log(files);
    if (files) {
      const linkImageArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      const imageArray = Array.from(files);
      setImages((prevImages) => [...prevImages, ...linkImageArray]);
      setInputImages((prevImages) => [...prevImages, ...imageArray]);

      console.log(images);
    }
  };

  const handleImageDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  useEffect(() => {
    const textarea = contentRef.current;
    console.log(textarea);
    if (textarea) {
      textarea.style.height = "18px";
      textarea.style.height = `${textarea.scrollHeight}px`;
      // console.log(textarea.scrollHeight);
    }
  }, [content]);

  useEffect(() => {
    getUser();
    getMessages();

  }, [userId]);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = Stomp.over(socket);
    client.debug = null;

    client.connect({}, () => {
      setStompClient(client);
      setIsConnected(true);
      // console.log(`/topic/groupchat/${id1}_${id2}`);
      client.subscribe(`/topic/groupchat/${id1}_${id2}`, (message) => {
        console.log(message.body);
        const messageBody = JSON.parse(message.body); 
        if (messageBody.type == "new message") {
          console.log(1)
          // getMessages();
          setMessages([...messages, messageBody.message]);
        }
      });
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, [stompClient]);

  return (
    <div className={style.MessagePage}>
      {user && (
        <div className={style.header}>
          <Avatar className={style.avatar} src={user.avatar} />
          <p className={style.name}>{user.fullname}</p>
        </div>
      )}

      {messages.length > 0 &&
        messages.map((message) => (
          <MessageOption
            id={message.id}
            avatar={message.user.avatar}
            content={message.text}
            images={message.images}
            userId={userId2}
            mes_userId={message.user.id}
          />
        ))}

      <div className={style.sendMessage}>
        <div className={style.image}>
          <InsertPhotoIcon
            className={style.insertIcon}
            onClick={handleInsertImage}
          />
          <input
            id="imageInput"
            onChange={handleImageInput}
            type="file"
            style={{ display: "none" }}
          />
        </div>
        <div className={style.contentInput}>
          <div className={style.imagePreview}>
            {images.map((image, index) => (
              <div key={index} className={style.imageContainer}>
                <img
                  className={style.image}
                  src={image}
                  alt={`Image ${index}`}
                />
                <CloseIcon
                  className={style.deleteIcon}
                  onClick={() => handleImageDelete(index)}
                />
              </div>
            ))}
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={contentRef}
            className={style.content}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
