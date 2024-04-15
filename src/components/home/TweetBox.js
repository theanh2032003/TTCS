import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloseIcon from '@mui/icons-material/Close';
// import { createPost } from '../service/postService';
import axios from '../service/customAxios';
const TweetBox = () => {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImages, setTweetImages] = useState([]);
  const [images, setImages] = useState([]);



  const handleInputClick = () => {
    const input = document.querySelector('.tweetBox__input input');
    if (input) {
      input.focus();
    }
  };


  const handleImageInput = (e) => {
    const files = e.target.files;
    console.log(files)
    if (files) {
      const linkImageArray = Array.from(files).map((file) => URL.createObjectURL(file));
      const imageArray = Array.from(files);
      setTweetImages((prevImages) => [...prevImages, ...linkImageArray]);
      setImages((prevImages) => [...prevImages, ...imageArray]);

      console.log(images);
    }
  };
  
  const handleImageDelete = (index) => {
    const newImages = [...tweetImages];
    newImages.splice(index, 1);
    setTweetImages(newImages);
  };

  const sendTweet = async (e) => {
    e.preventDefault();

    
    const formData = new FormData();
    formData.append('content', tweetMessage);
    
    images.forEach((image, index) => {
      formData.append('images', image);
    });
  
    axios.post('/post/save', formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Đảm bảo định dạng yêu cầu là multipart/form-data
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

      setTweetMessage('');
      setTweetImages([]);
      setImages([]);
  };

  return (
    <div className="tweetBox">
    <form>
      <div className="tweetBox__input" onClick={handleInputClick}>
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
        <input
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's happening?"
          type="text"
        />
      </div>
      <label htmlFor="fileInput" className="custom-file-upload">
        <input
          id="fileInput"
          type="file"
          onChange={handleImageInput}
          multiple
          style={{ display: 'none' }}
        />
        <InsertPhotoIcon className='insertPhotoIcon'/>
        
      </label>
      <div className="tweetBox__imagesPreview">
        {tweetImages.map((image, index) => (
          <div key={index} className="uploaded-image">
            <img src={image} alt={`Image ${index}`} />
            <CloseIcon className='delete_image' onClick={() => handleImageDelete(index)} />
          </div>
          
        ))}
      </div>
      <Button
        onClick={sendTweet}
        type="submit"
        className="tweetBox__tweetButton"
      >
        Tweet
      </Button>
    </form>
  </div>
  )
}

export default TweetBox