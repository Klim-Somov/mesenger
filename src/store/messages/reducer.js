import { ADD_CHAT } from "../conversation/actions";
import { ADD_MESSAGE, CLEAR_MESSAGES_FOR_CHAT } from "./actions";

const initialState = {
  chat1: [{ exists: true }],
  chat2: [{ exists: true }],
  chat3: [{ exists: true }],
  chat4: [{ exists: true }],
};

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [payload.id]: [...state[payload.id], payload.newMsg],
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
        ...copy,
      };
    }

    default:
      return state;
  }
};
