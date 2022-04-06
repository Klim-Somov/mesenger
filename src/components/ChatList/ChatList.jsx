import "./ChatList.scss";
import { Chat } from "../Chat/Chat";
import { NavLink, Outlet } from "react-router-dom";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import { useState } from "react";

const data = [
  {
    name: "Таня",
    lstMsg: "Brunch this weekend?",
    id: "chat1",
  },
  {
    name: "Дедушка",
    lstMsg: "Wish I could come, but I'm out of town this…",
    id: "chat2",
  },
  {
    name: "Вадим",
    lstMsg: "Do you have Paris recommendations? Have you ever…'",
    id: "chat3",
  },
];

export function ChatList() {
  const [chats, setСhats] = useState(data);

  const hendlDel = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setСhats(chats.filter((chat) => chat.id !== id));
    }
  };
  return (
    <>
      <div>
        {chats.map((chat) => (
          <div className="chatList" key={chat.id}>
            <NavLink key={chat.id} to={`/conversation/${chat.id}`}>
              <Chat
                delChat
                id={chat.id}
                name={chat.name}
                lstMsg={chat.lstMsg}
              />
            </NavLink>
            <button onClick={() => hendlDel(chat.id)} className="del-btn">
              <DeleteForeverSharpIcon />
            </button>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
}
