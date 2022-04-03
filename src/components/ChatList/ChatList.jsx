import "./ChatList.scss";
import { Chat } from "../Chat/Chat";
import { NavLink, Outlet } from "react-router-dom";

const chats = [
  {
    name: "Таня",
    lstMsg: "Brunch this weekend?",
    id: 1,
  },
  {
    name: "Дедушка",
    lstMsg: "Wish I could come, but I'm out of town this…",
    id: 2,
  },
  {
    name: "Вадим",
    lstMsg: "Do you have Paris recommendations? Have you ever…'",
    id: 3,
  },
];

export const ChatList = () => (
  <>
    <div className="chatList">
      {chats.map((chat) => (
        <NavLink key={chat.id} to={`/conversation/${chat.id}`}>
          <Chat name={chat.name} lstMsg={chat.lstMsg} />
        </NavLink>
      ))}
    </div>
    <Outlet />
  </>
);
