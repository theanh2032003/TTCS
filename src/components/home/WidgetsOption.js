import React, { useState, useEffect } from 'react'
import "./WidgetsOption.css";
import { Avatar, Button } from "@mui/material";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
import { addFriend, checkStatusFriendRequest } from '../service/userService';


const WidgetsOption = ({userId,name, textId, avatar}) => {

  const [followText, setFollowText] = useState('Add');
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
      const socket = new WebSocket('ws://localhost:8080/ws');
      const stompClient = Stomp.over(socket);
      
      stompClient.connect({}, frame => {
          console.log('Connected: ' + frame);
          setStompClient(stompClient);
      });

      return () => {
          if (stompClient !== null) {
              stompClient.disconnect();
          }
      };
  }, []);

  const sendMessage = () => {
      if (stompClient !== null) {
        console.log('q')
          stompClient.send('/app/hello', {}, JSON.stringify({ 'name': 'ReactJS' }));
      }
  };
  useEffect(() => {
    const setTextFollowButton = async(userId) => {
      let res = await checkStatusFriendRequest(userId);
      setFollowText(res.data);
    }
    setTextFollowButton(userId);
  },[]);



  return (
    <div className='widgetsOption'>
      <Avatar className="profile-pic" src={avatar} alt="Profile Picture" />
      <div className="user-info">
        <strong>{name}</strong>
        <span>{textId}</span>
      </div>
      <Button className="follow-btn" onClick={() => sendMessage()}>{followText}</Button>

    </div>
  )
}

export default WidgetsOption