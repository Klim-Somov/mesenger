import "./App.scss";
import { React, useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Conversation } from "./screens/Conversation/Conversation";
import { Profile } from "./components/Profile/Profile";
import { ChatList } from "./components/ChatList/ChatList";
import { ThemeContext } from "./utils/ThemeContext";
import { Button } from "@mui/material";
import Switch from "@mui/material/Switch";

function App() {
  const [theme, setTheme] = useState("dark");
  const girlColor = " rgba(26, 144, 255, 0.698)";
  const boyColor = "rgba(255, 26, 236, 0.698)";

  const toggleTheme = () => (setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark")));
  return (
    <ThemeContext.Provider value={{theme: theme, changeTheme: toggleTheme}}>
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
          <Route path="/conversation" element={<ChatList />}>
            <Route path=":id" element={<Conversation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
export default App;
