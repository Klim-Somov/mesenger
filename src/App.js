import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Conversation } from "./screens/Conversation/Conversation";
import { Profile } from "./components/Profile/Profile";
import { ChatList } from "./components/ChatList/ChatList";

function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <ul className="nav__list">
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
              to="/conversation"
            >
              Chat
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/conversation" element={<ChatList />}>
          <Route path=":id" element={<Conversation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
