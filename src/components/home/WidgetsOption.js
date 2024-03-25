import React from 'react'
import "./WidgetsOption.css";
import { Avatar, Button } from "@mui/material";

const WidgetsOption = ({image, name, id}) => {
  return (
    <div className='widgetsOption'>
      <Avatar class="profile-pic" src="image" alt="Profile Picture" />
      <div class="user-info">
        <strong>{name}</strong>
        <span>@{id}</span>
      </div>
      <Button class="follow-btn">Follow</Button>

    </div>
  )
}

export default WidgetsOption