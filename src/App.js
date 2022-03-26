import "./App.scss";
import { Counter } from "./components/example/Example";
import { Message } from "./components/message/Message";
import { useEffect, useState } from "react";
import Form from "./components/form/Form";




function App() {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
      setTimeout(() => {
      setMessages([...messages, { text: "want to talk?", author: " BOT", id: Math.random()}]);
    }, 2000);
    return () => {
      console.log('ee')
    }
  
  }, [])
  
  const addMessage = (newText) => {
    setMessages([...messages, { text: newText, author: " Klim Somov", id: Math.random()  }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={addMessage} />
        {messages.map((m) => (<Message key = {m.id} text={m.text} author={m.author}/>))}
        
      </header>
    </div>
  );
}

export default App;
