import "./App.scss";
import { React, useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Conversation } from "./screens/Conversation/Conversation";
import { Profile } from "./components/Profile/Profile";
import { ChatList } from "./components/ChatList/ChatList";
import { ThemeContext } from "./utils/ThemeContext";
import { Button } from "@mui/material";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <div
        style={{backgroundColor: theme === "dark" ? "rgba(255, 26, 236, 0.698)" : " rgba(26, 144, 255, 0.698)" }}
        className="nav">
          <ul className="nav__list">
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/conversation"
              >
                Chat
              </NavLink>
            </li>
          </ul>
          <Button
          size="small"
          variant="contained"
            onClick={() =>
              setTheme((prevTheme) =>
                prevTheme === "dark"
                  ? "light"
                  : "dark"
              )
            }
          >
            Theme
          </Button>
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
