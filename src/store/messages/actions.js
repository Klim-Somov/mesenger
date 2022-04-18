import { useDispatch } from "react-redux";
import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const CLEAR_MESSAGES_FOR_CHAT = "MESSAGES::CLEAR_MESSAGES_FOR_CHAT";

export const addMessage = (newMsg, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    newMsg: newMsg,
    chatId,
  },
});

export const clearMessages = (chatId) => ({
  type: CLEAR_MESSAGES_FOR_CHAT,
  payload: chatId,
});
let timeout

export const addMessageWithReply = (newMsg, chatId) => (dispatch) => {
  
  dispatch(addMessage(newMsg, chatId));

  if (newMsg?.author === AUTHORS.human) {
    clearMessages(timeout);
   timeout =  setTimeout(() => {
      dispatch(
        addMessage(
          {
            author: AUTHORS.robot,
            text: "want to talk?",
            id: Date.now(),
          },
          chatId
        )
      );
    }, 1200);
  }
};
