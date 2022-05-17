import { onValue, push } from "firebase/database";

import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import { Form } from "../../components/Form/Form";
import { Messages } from "../../components/Messages/Messages";
import { getMsgsRefById } from "../../servises/firebase";
import { selectChats } from "../../store/conversation/selectors";
import { addMessage, addMessageWithReply } from "../../store/messages/actions";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { AUTHORS } from "../../utils/constants";

export function Conversation() {
  const { id } = useParams();

  const [messages, setMessages] = useState([]);

  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
  // const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  const sendMessages = (text) => {
    push(getMsgsRefById(id), {
      author: AUTHORS.human,
      text,
      id: Date.now(),
    });
    // dispatch(
    //   addMessageWithReply(
    //     {
    //       author: AUTHORS.human,
    //       text,
    //       id: Date.now(),
    //     },
    //     id
    //   )
    // );
  };
  useEffect(() => {
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
      const val = snapshot.val();
      if (!snapshot.val()?.exists) {
        setMessages(null);
      } else {
        console.log(val);
        setMessages(Object.values(snapshot.val().messageList || {}));
      }
    });
    return unsubscribe;
  }, [id]);

  // useEffect(() => {
  //   const lastMessage = messages?.[messages?.length - 1];
  //   if (lastMessage?.author === AUTHORS.human) {
  //     timeout.current = setTimeout(() => {
  //       dispatch(
  //         addMessage(
  //           {
  //             author: AUTHORS.robot,
  //             text: "want to talk?",
  //             id: Date.now(),
  //           },
  //           id
  //         )
  //       );
  //     }, 1200);
  //   }
  //   return () => {
  //     clearTimeout(timeout.current);
  //   };
  // }, [messages]);

  if (!messages) {
    return <Navigate to="/conversation" replace />;
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="form-content">
          <div className="input-messages">
            <Form onSubmit={sendMessages} />
          </div>
          <div>
            <Messages messages={messages} />
          </div>
        </div>
      </header>
    </div>
  );
}
