import "./App.scss";
// import { Counter } from "./components/example/Example";
import { useEffect, useState, useRef } from "react";
import Form from "./components/form/Form";
import { Messages } from "./components/Messages/Messages";
import { AUTHORS } from "./utils/constants";
import { Chats } from "./components/Chats/Chats";
function App() {
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
        <div>
          <Chats />
        </div>
        <div className="form-content">
          <div>
            <Messages messages={messages} />
          </div>
          <div className="input-messages">
            {" "}
            <Form onSubmit={sendMessages} />
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
