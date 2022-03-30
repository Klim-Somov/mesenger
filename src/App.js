import "./App.scss";
import { Counter } from "./components/example/Example";
import { useEffect, useState, useRef } from "react";
import Form from "./components/form/Form";
import { Messages } from "./components/Messages/Messages";
import { AUTHORS } from "./utils/constants";

function App() {
  const [messages, setMessages] = useState([]);
  const timeout = useRef();
  const wrapperRef = useRef()
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

  const hendlerScroll = () => {
    wrapperRef.current?.scrollTo({x: 0, y: 0})
  }

  return (
    <div className="App" ref={wrapperRef}>
      <header className="App-header">
        <Form onSubmit={sendMessages} />
        <Messages messages={messages} />
        
      </header>
    </div>
  );
}

export default App;
