import { ADD_CHAT } from "../conversation/actions";
import { initialState } from "../conversation/reducer";
import { ADD_MESSAGE, CLEAR_MESSAGES_FOR_CHAT } from "./actions";

const messages = {
  chat1: [],
  chat2: [],
  chat3: [],
  chat4: []
};

console.log(messages);
export const messagesReducer = (state = messages, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.newMsg],
      };
    }
    case ADD_CHAT: {
      return {
        ...state,
        [payload.id]: [],
      };
    }
    case CLEAR_MESSAGES_FOR_CHAT: {
      const copy = { ...state };
      delete copy[payload];
      return {
        copy,
      };
    }

    default:
      return state;
  }
};
