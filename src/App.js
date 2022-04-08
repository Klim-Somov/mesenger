import { React, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.scss";
import { Conversation } from "./screens/Conversation/Conversation";
import { Profile } from "./screens/Profile/Profile";
import { ChatList } from "./components/ChatList/ChatList";
import { ThemeContext } from "./utils/ThemeContext";
import Switch from "@mui/material/Switch";
import { store } from "./store";

const initialChats = [
  {
    name: "Таня",
    lstMsg: "Brunch this weekend?",
    id: "chat1",
    avatar:
      "https://images.androeed.ru/icons/2022/02/14/ico-ninja-turtles-legends-1644870122.webp",
  },
  {
    name: "Дедушка",
    lstMsg: "Wish I could come, but I'm out of town this…",
    id: "chat2",
    avatar:
      "https://ic.pics.livejournal.com/tanjand/44781189/99899304/99899304_original.jpg",
  },
  {
    name: "Вадим",
    lstMsg: "Do you have Paris recommendations? Have you ever…'",
    id: "chat3",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREh-zqIliPz-WGwVfQJQZZUy5XXAudS0qxAg&usqp=CAU",
  },
  {
    name: "Арсен",
    lstMsg: "ok",
    id: "chat4",
    avatar: "https://images.wbstatic.net/big/new/8600000/8606489-1.jpg",
  },
];

const initMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

function App() {
  const girlColor = " rgba(26, 144, 255, 0.698)";
  const boyColor = "rgba(255, 26, 236, 0.698)";

  const [chats, setСhats] = useState(initialChats);

  const [messages, setMessages] = useState(initMessages);

  const [theme, setTheme] = useState("dark");

  const addMessage = (newMsg, id) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const hendlDel = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setСhats(chats.filter((chat) => chat.id !== id));
    }
  };

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  return (
    <Provider store={store}>
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
                setTheme((prevTheme) =>
                  prevTheme === "dark" ? "light" : "dark"
                )
              }
              name="theme"
              color="primary"
            />
          </div>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/conversation"
              element={<ChatList chats={chats} hendlDel={hendlDel} />}
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
    </Provider>
  );
}
export default App;
