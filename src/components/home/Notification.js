import React, { useEffect, useState } from 'react';
import './Notification.css'
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { getAllFriendRequest, confirmFriendRequest } from '../service/userService';

const Notification = () => {

    const [stompClient, setStompClient] = useState(null);
    const [friendRequests, setFriendRequests] = useState([]);

    const allFriendRequest = async() => {
        let res = await getAllFriendRequest();
        console.log(res.data);
        setFriendRequests(res.data);
    };

    useEffect(()=>{
        setFriendRequests([]);
        allFriendRequest();
        console.log(friendRequests)
    },[]);

    const handleAccept = async (friendRequestId) => {
        console.log('1')
        let res = await confirmFriendRequest(friendRequestId);
        console.log(res.data);
    }

    // useEffect(() => {
    //     const socket = new SockJS('/ws');
    //     const stompClient = Stomp.over(socket);
    
    //     stompClient.connect({}, frame => {
    //         console.log('Connected: ' + frame);
    //         setStompClient(stompClient);
    
    //         stompClient.subscribe('/user/queue/friend-request', message => {
    //             const newRequest = JSON.parse(message.body); 
    //             console.log(newRequest);
    //             setFriendRequests(prevRequests => [...prevRequests, newRequest]); // Add new request to friendRequests array
    //             console.log(friendRequests);
    //         });
    //     });
    
    //     return () => {
    //         if (stompClient !== null) {
    //             stompClient.disconnect();
    //         }
        
    //     };
    // }, []);

  return (
    <div className='notification'>
    
    {friendRequests.map((friendRequest, index) => (
        <div key={index}>
            <p>{friendRequest.sender.fullname} đã gửi lời mời kết bạn</p>
            <div className='btnNotification'>
                <button className='accept'onClick={() => handleAccept(friendRequest.id)}>Đồng ý</button> 
                <button className='deleteRequest'>Xóa lời mời kết bạn</button>
            </div>
        </div>
    ))}
    
</div>
        
  )
}

export default Notification