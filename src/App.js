import { React, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.scss";
import { Conversation } from "./screens/Conversation/Conversation";
import { Profile } from "./screens/Profile/Profile";
import { ChatList } from "./components/ChatList/ChatList";
import { ThemeContext } from "./utils/ThemeContext";
import Switch from "@mui/material/Switch";
import { store } from "./store";
import { addChat, deleteChat } from "./store/conversation/actions";
import { selectShats } from "./store/conversation/selectors";


function App() {
  const girlColor = " rgba(26, 144, 255, 0.698)";
  const boyColor = "rgba(255, 26, 236, 0.698)";

  // const [chats, setСhats] = useState(initialChats);

  const chats = useSelector(selectShats);
  const dispatch = useDispatch();

  const initMessages = chats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
  }, {});

  const [messages, setMessages] = useState(initMessages);

  const [theme, setTheme] = useState("dark");

  const addMessage = (newMsg, id) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const hendlDel = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      // setСhats(chats.filter((chat) => chat.id !== id));
      dispatch(deleteChat(id));
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[id];

        return newMessages;
      });
    }
  };
  const addConversation = (newChat) => {
    dispatch(addChat(newChat));
  };

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: toggleTheme }}>
      <BrowserRouter>
        <div
          style={{ backgroundColor: theme === "dark" ? boyColor : girlColor }}
          className="nav"
        >
          <ul className="nav__list">
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/profile"
              >
                PROFILE
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/conversation"
              >
                CHAT
              </NavLink>
            </li>
          </ul>

          <Switch
            onChange={() =>
              setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
            }
            name="theme"
            color="primary"
          />
        </div>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/conversation"
            element={
              <ChatList
                chats={chats}
                hendlDel={hendlDel}
                addChat={addConversation}
              />
            }
          >
            <Route
              path=":id"
              element={
                <Conversation messages={messages} addMessage={addMessage} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
export default App;
