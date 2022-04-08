import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router";
import { Form } from "../../components/Form/Form";
import { Messages } from "../../components/Messages/Messages";
import { AUTHORS } from "../../utils/constants";



export function Conversation({initMessages}) {
  const { id } = useParams();

  const [messages, setMessages] = useState(initMessages);

  const timeout = useRef();
  const wrapperRef = useRef();

  const addMessage = (newMsg) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const sendMessages = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: Date.now(),
    });
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
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
  if (!messages[id]) {
    return <Navigate to="/conversation" replace />;
  }

  return (
    <div className="App" ref={wrapperRef}>
      <header className="App-header">
        <div className="form-content">
          <div className="input-messages">
            <Form onSubmit={sendMessages} />
          </div>
          <div>
            <Messages messages={messages[id]} />{" "}
          </div>
        </div>
      </header>
    </div>
  );
}
