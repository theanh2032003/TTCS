import React from 'react'
import "./Home.css";
import SideBar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';

const Home = () => {
  return (
    <div className='homePage'>
        <SideBar/>
        <div className='mainContainer'>
            <Feed/>
            <Widgets/>        
        </div>
    </div>
  )
}

export default Home;