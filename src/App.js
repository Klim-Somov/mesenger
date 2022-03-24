import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/message/Message";
import { findAllInRenderedTree } from "react-dom/test-utils";

const name = 'Klim'


function App() {
  const foo = () => {
    alert(`How are you ${name}`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Message name={name} age={35} foo={foo}/>
      </header>
    </div>
  );
}

export default App;
