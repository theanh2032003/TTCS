import axios from "./customAxios";

if (localStorage.getItem("jwtToken") != null) {
  const token = localStorage.getItem("jwtToken");

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const getMessagesOfGroupChat = (user1Id) => {
  return axios.get(
    `chat/get/${user1Id}`,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    }
  );
};

const sendMessage = (formData) => {
  return axios.post("chat/send_message", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  });
};

const changeMessage = (messageId, content) => {
  return axios.patch("chat/change_content", { messageId, content });
};

export { getMessagesOfGroupChat, sendMessage, changeMessage };
