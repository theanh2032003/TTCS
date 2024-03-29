import React,{useState} from 'react'
import './Profile.css';
import anh from './avatar-dep-84.jpg';
import Post from './Post';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FlipMove from "react-flip-move";

const Profile = () => {

    const [posts, setPosts] = useState([]);

  return (
    <div className='profile'>
        <div class="profile-header">
        <img class="header-image" src={anh} alt="Header Image" />
        <img class="profile-picture" src={anh} alt="Profile Picture" />
        <div className='profile-info'>
            <div className='info-button'>
                <div className='more-button btn'>
                    <MoreHorizIcon/>
                </div>
                <div className='email-button btn'>
                   <EmailIcon/> 
                </div>
                <div className='follow-button btn'>
                    follow
                </div>
                
            </div>
            <div className='info'>
                <p className='fullname' >The Anh</p>
                <p className='description'>@theanh</p>
                <p>favorite</p>
                <p>joined at</p>
                <p>100 friends</p>
            </div>
                <ul class="navbar">
                <li class="active">Posts</li>
                <li>Replies</li>
                <li>Media</li>
                <li>Likes</li>
            </ul>
        </div>
        </div>
        <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Profile