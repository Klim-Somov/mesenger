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
    avatar: "https://images.androeed.ru/icons/2022/02/14/ico-ninja-turtles-legends-1644870122.webp"
  },
  {
    name: "Дедушка",
    lstMsg: "Wish I could come, but I'm out of town this…",
    id: "chat2",
    avatar: "https://ic.pics.livejournal.com/tanjand/44781189/99899304/99899304_original.jpg"
  },
  {
    name: "Вадим",
    lstMsg: "Do you have Paris recommendations? Have you ever…'",
    id: "chat3",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREh-zqIliPz-WGwVfQJQZZUy5XXAudS0qxAg&usqp=CAU"
  },
  {
    name: "Арсен",
    lstMsg: "ok",
    id: "chat4",
    avatar: "https://images.wbstatic.net/big/new/8600000/8606489-1.jpg"
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
