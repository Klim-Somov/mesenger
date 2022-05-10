import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.scss";
import { Conversation } from "./screens/Conversation/Conversation";
import { Profile } from "./screens/Profile/Profile";
import { ChatList } from "./components/ChatList/ChatList";
import { ThemeContext } from "./utils/ThemeContext";
import Switch from "@mui/material/Switch";
import { Articles } from "./screens/Articles/Articles";
import { PrivatRoute } from "./components/PrivatRoute/PrivatRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { Home } from "./screens/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logOut, userNameRef } from "./servises/firebase";
import { useSelector } from "react-redux";
import { selectName, selectUserName } from "./store/profile/selectors";
import PersonIcon from "@mui/icons-material/Person";
import SpaceBlog from "./components/SpaceBlog/SpaceBlog";
import { onValue } from "firebase/database";
function App() {
  const girlColor = " rgba(26, 144, 255, 0.698)";
  const boyColor = "rgba(255, 26, 236, 0.698)";
  // const initMessages = chats.reduce((acc, chat) => {
  //   acc[chat.id] = [];
  //   return acc;
  // }, {});
  const [theme, setTheme] = useState("dark");

  const [authed, setAuthed] = useState(false);

  const hendleLogin = () => setAuthed(true);

  const name = auth?.currentUser?.email;
  // const name = useSelector(selectUserName)

  
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        hendleLogin();
      } else {
        hendleLogout();
      }
    });
    return unsubscribe;
  }, []);

  const hendleLogout = () => {
    setAuthed(false);
    logOut();
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
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/articles"
              >
                RANDOM USELESS FACKTS
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/space-blog"
              >
                SPACE BLOG
              </NavLink>
            </li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <PersonIcon style={{ color: "white" }} />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                marginRight: "20px",
              }}
            >
              {name}
            </div>
          </div>

          <Switch
            onChange={() =>
              setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
            }
            name="theme"
            color="primary"
          />
        </div>
        <Routes>
          <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={hendleLogin} />} />
            <Route
              path="signup"
              element={<Home onAuth={hendleLogin} isSignUp />}
            />
          </Route>
          <Route path="/profile" element={<PrivatRoute authed={authed} />}>
            <Route path="" element={<Profile onLogout={hendleLogout} />} />
          </Route>
          <Route path="/articles" element={<Articles />} />
          <Route path="/space-blog" element={<SpaceBlog />} />
          <Route path="/conversation" element={<PrivatRoute authed={authed} />}>
            <Route path="" element={<ChatList />}>
              <Route path=":id" element={<Conversation />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
export default App;
