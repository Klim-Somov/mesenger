import "./App.scss";
import { Counter } from "./components/example/Example";
import { Message } from "./components/message/Message";
import { useEffect, useState } from "react";
import Form from "./components/form/Form";

const human = "Me";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };
  const sendMessages = (text) => {
    addMessage({
      author: human,
      text,
      id: Math.random(),
    });
  };
  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === human) {
      timeout = setTimeout(() => {
        addMessage({
          author: "BOT",
          text: "want to talk?",
          id: Math.random(),
        });
      }, 1500);
    }
    return () =>{
      clearTimeout(timeout)
    }
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={sendMessages} />
        {messages.map((m) => (
          <Message key={m.id} text={m.text} author={m.author} />
        ))}
      </header>
    </div>
  );
}

export default App;
