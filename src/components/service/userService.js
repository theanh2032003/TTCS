import axios from "./customAxios";

if(localStorage.getItem('jwtToken') != null ){
    const token = localStorage.getItem('jwtToken');
   
   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;   
}

const loginApi = (email, password) => {
    return axios.post("auth/login", {
        email,password
})};

const registerApi = (email,password,fullname,textId,rootLink) => {
    return axios.post("auth/register", {
        email,password,fullname,textId,rootLink
    });
};

const confirmRegister = (token) => {
    return axios.post("auth/register/confirm", {
        token
    });
}

const reSendConfirmToken = (email) => {
    return axios.post("auth/re_send_token",{
        email
    });
}

// const confirmResigter = () => {
//     return axios.get("auth/confirm");
// }

const changePasswordApi = (email) => {
    return axios.patch("auth/changePassword" ,{
        'email':email
    });
};

const confirmTokenChangePassword = (email, token, password) => {
    return axios.get("auth/changePassword/confirm",{
        email: email,
        token: token,
        password: password
    })
}

const searchUserApi = (userName) => {
    return axios.get("user/search" , {
            params:{
                name: userName
            } 
    });
};

const addFriend = (receiverId) => {
    return axios.post(`user/add_friend/${receiverId}`);
};

const checkStatusFriendRequest = (receiverId) => {
    return axios.get('user/check_add_friend',{
        params:{
            receiveId:receiverId
        }
    });
};

const getAllFriendRequest = () => {
    return axios.get("user/get_all_friend_request");
}

const confirmFriendRequest = (friendRequestId) => {
    return axios.patch(`user/confirm_add_friend/${friendRequestId}`)
}

const getInfo = (userId) => {
    return axios.get(`user/${userId}`);
}



export {loginApi, registerApi, confirmTokenChangePassword, confirmRegister, reSendConfirmToken,
     changePasswordApi, searchUserApi, addFriend, checkStatusFriendRequest, getAllFriendRequest, confirmFriendRequest, getInfo};