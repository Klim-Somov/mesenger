import { combineReducers, createStore } from "redux";
import { conversationReducer } from "./conversation/reducer";

import { profileReducer } from "./profile/reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: conversationReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
