import React from 'react';
import "./SideBar.css";
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



function  SideBar () {
  return (
    <div className='sidebar'>
        <InterestsIcon className="sidebar__twitterIcon"/>

        <SideBarOption active Icon={HomeIcon} text="Home"/>
        <SideBarOption Icon={SearchIcon} text="Explore"/>
        <SideBarOption Icon={NotificationsNoneIcon} text="Botifications"/>
        <SideBarOption Icon={ChatIcon} text="Messages" />
        <SideBarOption Icon={PermIdentityIcon} text="Profile" />
        <SideBarOption Icon={MoreHorizIcon} text="More" />

        <Button variant="outlined" className="sidebar__tweet" fullWidth>
            Tweet
        </Button>
    </div>
  )
}

export default SideBar