import React from 'react';
import "./SideBar.css";
import { Link, useNavigate } from 'react-router-dom';
import InterestsIcon from '@mui/icons-material/Interests';
import SideBarOption from './SideBarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatIcon from '@mui/icons-material/Chat';
import { Button } from "@mui/material";



function SideBar({ onOptionClick }) {

  
  return (
    <div className='sidebar'>
      <InterestsIcon className="sidebar__twitterIcon"/>

      <SideBarOption Icon={HomeIcon} text="Home" onClick={() => onOptionClick('Feed')} />
      <SideBarOption Icon={NotificationsNoneIcon} text="Botifications" onClick={() => onOptionClick('Notifications')} />
      <SideBarOption Icon={ChatIcon} text="Messages" onClick={() => onOptionClick('Messages')} />
      <SideBarOption Icon={PermIdentityIcon} text="Profile" onClick={() => onOptionClick('Profile')} />
      <SideBarOption Icon={MoreHorizIcon} text="More" onClick={() => onOptionClick('More')} />


      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default SideBar