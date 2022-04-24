import { React, useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.scss";
import { Conversation } from "./screens/Conversation/Conversation";
import { Profile } from "./screens/Profile/Profile";
import { ChatList } from "./components/ChatList/ChatList";
import { ThemeContext } from "./utils/ThemeContext";
import Switch from "@mui/material/Switch";
import { Articles } from "./screens/Articles/Articles";

function App() {
  const girlColor = " rgba(26, 144, 255, 0.698)";
  const boyColor = "rgba(255, 26, 236, 0.698)";
  // const initMessages = chats.reduce((acc, chat) => {
  //   acc[chat.id] = [];
  //   return acc;
  // }, {});
  const [theme, setTheme] = useState("dark");

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
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/articles"
              >
                ARTICLES
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
          <Route path="/articles" element={<Articles />} />
          <Route path="/conversation" element={<ChatList />}>
            <Route path=":id" element={<Conversation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
export default App;
