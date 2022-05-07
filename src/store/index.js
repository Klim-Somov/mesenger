import { conversationReducer } from "./conversation/reducer";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import { factsReducer } from "./facts/reducer";

const persistConfig = {
  key: "gbMessenger",
  storage,
  whitelist: ["messages", "chats"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: conversationReducer,
  messages: messagesReducer,
  facts: factsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
