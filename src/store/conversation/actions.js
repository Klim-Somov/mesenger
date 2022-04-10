export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DEL_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});


export const deleteChat = (idToDel) => ({
  type: DEL_CHAT,
  payload: idToDel,
});
