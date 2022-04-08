import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./ChatList.scss";
import { Chat } from "../Chat/Chat";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";



export function ChatList({data}) {
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
                avatar={chat.avatar}
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
