import { NavLink, Outlet } from "react-router-dom";
import "./ChatList.scss";
import { Chat } from "../Chat/Chat";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/conversation/selectors";
import { addChat, deleteChat } from "../../store/conversation/actions";
import { clearMessages } from "../../store/messages/actions";

export function ChatList() {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const hendlSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      lstMsg: "",
      id: `chat${Date.now()}`,
      avatar: null,
    };
    dispatch(addChat(newChat));
  };

  const hendleRemoveChat = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
    dispatch(deleteChat(id));
    dispatch(clearMessages(id));}
  };
  return (
    <>
      <div>
        {chats.map((chat) => (
          <div className="chatList" key={chat.id}>
            <NavLink to={`/conversation/${chat.id}`}>
              <Chat
                avatar={chat.avatar}
                id={chat.id}
                name={chat.name}
                lstMsg={chat.lstMsg}
              />
            </NavLink>
            <button onClick={() => hendleRemoveChat(chat.id)} className="del-btn">
              <DeleteForeverSharpIcon />
            </button>
          </div>
        ))}
      </div>

      <Form onSubmit={hendlSubmit} />
      <Outlet />
    </>
  );
}
