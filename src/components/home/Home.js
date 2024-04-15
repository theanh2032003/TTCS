import React, {useState, useEffect} from 'react'
import "./Home.css";
import SideBar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';
import Profile from './Profile';
import Notification from './Notification';
import { getAllPostOfNewFeed } from '../service/postService';
import { searchUserApi } from '../service/userService';

const Home = () => {

  const [showFeed, setShowFeed] = useState(true); // Mặc định hiển thị Feed
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);


  const handleSideBarOptionClick = (option) => {
    if (option === 'Feed') {
      setShowFeed(true);
      setShowProfile(false);
      setShowNotification(false);
    } else if (option === 'Profile') {
      setShowProfile(true);
      setShowFeed(false);
      setShowNotification(false);
    } else if (option === 'Notifications') {
      setShowProfile(false);
      setShowFeed(false);
      setShowNotification(true);
    }
  };

  return (
    <div className='homePage'>
        <SideBar onOptionClick={handleSideBarOptionClick} />
        <div className='mainContainer'>
        {showFeed && <Feed />}
        {showProfile && <Profile />}
        {showNotification && <Notification />}
            <Widgets/>        
        </div>
    </div>
  )
}

export default Home;