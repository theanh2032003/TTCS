import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import Profile from "./components/profile/Profile";
import Feed from "./components/feed/Feed";
import EditProfile from "./components/editProfile/EditProfile";
import PostDetail from "./components/PostDetail/PostDetail";
import MessagePage from "./components/Message/MessagePage";
import FriendPage from "./components/friend/FriendPage";
import VideoCall  from "./components/videoCall/videoCall";
function App() {
  return (
    <Routes>
      <Route path="/home/*" element={<Home />}>
        <Route path="" element={<Feed />} />
        <Route path="notification" element={<Notification />} />
        {/* <Route path="/messages" element={<Messages />} /> */}
        <Route path="profile/:userId" element={<Profile />} />
        <Route path="edit_profile" element={<EditProfile />} />
        <Route path="post/:postId" element={<PostDetail />} />
        <Route path="message/:userId" element={<MessagePage />} />
        <Route path="message_null" element={<div></div>} />
        <Route path="friends" element={<FriendPage/>} />

        
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="/video_call/:roomID" element={<VideoCall />} />
    </Routes>
  );
}

export default App;
