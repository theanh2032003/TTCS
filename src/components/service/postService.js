import axios from "./customAxios";

if(localStorage.getItem('jwtToken') != null ){
     const token = localStorage.getItem('jwtToken');
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;   
 }

const getAllPostOfNewFeed = () => {
     return axios.get('post/post_newfeed');
}

const createPost = (formData) => {
     return axios.post("post/save",formData,
     {
     headers: { 
          "Content-Type": "multipart/form-data",
          'Accept': 'application/json'
     }          
     }

     )
}

export {getAllPostOfNewFeed,createPost};