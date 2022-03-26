import "./App.scss";
import { Counter } from "./components/example/Example";
import { Message } from "./components/message/Message";
import { useEffect, useState } from "react";
import Form from "./components/form/Form";




function App() {
  const [messages, setMessages] = useState([]);

  


useEffect(() => {   


lastAuthot !== 'BOT'? 
  setTimeout(() => {
    (setMessages([...messages, { text: "want to talk?", author: "BOT", id: Math.random()}])) 
  }, 1500)
  : console.log('Привет от бота')
  return () => {
    clearTimeout()
    }
  }, [messages])

let lastAuthot = (messages.slice(-1)).map(x => x.author).toString()



  
  const addMessage = (text) => {
    setMessages([...messages, { text, author: "Klim Somov", id: Math.random()  }]);
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
