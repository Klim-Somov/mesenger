import { NavLink, Outlet } from "react-router-dom";
import "./ChatList.scss";
import { Chat } from "../Chat/Chat";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/conversation/selectors";
import { addChat, deleteChat } from "../../store/conversation/actions";
import { clearMessages } from "../../store/messages/actions";
import { onValue, remove, set } from "firebase/database";
import {
  chatsRef,
  getChatRefById,
  getMsgsRefById,
} from "../../servises/firebase";
import { useEffect, useState } from "react";

export function ChatList() {
  const [chats, setChats] = useState([]);
  // const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const hendlSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      lstMsg: "Привет! я в WhatsPap!",
      id: `chat${Date.now()}`,
      avatar:
        "https://img.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg",
    };
    // Диспатчил обьект в стор
    // dispatch(addChat(newChat));
    // вместо стора отправляю обьект в firebase
    set(getChatRefById(newChat.id), newChat);
    set(getMsgsRefById(newChat.id), { exists: true, messageList: {} });
  };

  const hendleRemoveChat = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      remove(getChatRefById(id));
      set(getMsgsRefById(id), null);

      // dispatch(deleteChat(id));
      // dispatch(clearMessages(id));
    }
  };
  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      console.log(snapshot.val());
      //ПОЛУЧАЮ ИЗ БД ОБЬЕКТ ЧАТОВ И КЛАДУ ЕГО В chats
      setChats(Object.values(snapshot.val() || {}));
    });
    return unsubscribe;
  }, []);

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
            <button
              onClick={() => hendleRemoveChat(chat.id)}
              className="del-btn"
            >
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
