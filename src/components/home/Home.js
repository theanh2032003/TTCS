import React from 'react'
import "./Home.css";
import SideBar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';
import Profile from './Profile';


const Home = () => {
  return (
    <div className='homePage'>
        <SideBar/>
        <div className='mainContainer'>
            {/* <Feed/> */}
            <Profile/>
            <Widgets/>        
        </div>
    </div>
  )
}

export default Home;