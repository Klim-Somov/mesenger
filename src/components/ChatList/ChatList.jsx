import { NavLink, Outlet } from "react-router-dom";
import "./ChatList.scss";
import { Chat } from "../Chat/Chat";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import { Form } from "../Form/Form";

export function ChatList({ chats, hendlDel, addChat }) {
  const hendlSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      lstMsg: "",
      id: `chat${Date.now()}`,
      avatar: null,
    };
    addChat(newChat);
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
      
      <Form onSubmit={hendlSubmit}/>
      <Outlet />
    </>
  );
}
