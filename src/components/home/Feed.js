import React, {useState, useEffect} from 'react'
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import FlipMove from "react-flip-move";
import { getAllPostOfNewFeed } from '../service/postService';

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const getPost = async() => {
      return await getAllPostOfNewFeed();
    }
    
    setPosts(getPost());


  },[]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {/* {posts.map((post) => (
         return <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))} */}
      </FlipMove>
    </div>
  );
}

export default Feed