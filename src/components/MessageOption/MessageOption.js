import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import style from "./MessageOption.module.scss";
import { changeMessage } from "../service/chatService";
const MessageOption = ({ id, avatar, content, images, userId, mes_userId }) => {
  const [isLeft, setIsLeft] = useState(false);

  useEffect(() => {
    if (userId != mes_userId) {
      console.log(userId);
      console.log(mes_userId);
      setIsLeft(true);
      console.log(isLeft);
    }
  }, []);

  return (
    <div className={style.messageContainer}>
      {isLeft && (
        <div className={style.leftMessage}>
          <Avatar className={style.avatar} src={avatar} />
          <div className={style.message}>
            <p className={style.content}>{content}</p>
          </div>
        </div>
      )}

      {!isLeft && (
        <div className={style.rightMessage}>
          <div className={style.message}>
            <p className={style.content}>{content}</p>
          </div>
          <Avatar className={style.avatar} src={avatar} />
        </div>
      )}
    </div>
  );
};

export default MessageOption;
