import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from "../../components/Form/Form";
import { Messages } from "../../components/Messages/Messages";
import { AUTHORS } from "../../utils/constants";

export function Conversation() {
  const { id } = useParams();
  console.log(id);
  const [messages, setMessages] = useState([]);
  const timeout = useRef();
  const wrapperRef = useRef();
  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };
  const sendMessages = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: Date.now(),
    });
  };
  useEffect(() => {
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "want to talk?",
          id: Date.now(),
        });
      }, 1200);
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  return (
    <div className="App" ref={wrapperRef}>
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
