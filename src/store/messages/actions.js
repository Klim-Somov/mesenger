
import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const CLEAR_MESSAGES_FOR_CHAT = "MESSAGES::CLEAR_MESSAGES_FOR_CHAT";

export const addMessage = (newMsg, id) => ({
  type: ADD_MESSAGE,
  payload: {
    newMsg,
    id,
  },
});

export const clearMessages = (id) => ({
  type: CLEAR_MESSAGES_FOR_CHAT,
  payload: id,
});
let timeout

export const addMessageWithReply = (newMsg, id) => (dispatch) => {
  
  dispatch(addMessage(newMsg, id));

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
          id
        )
      );
    }, 1200);
  }
};
