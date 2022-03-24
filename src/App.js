import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/message/Message";

const name = 'Klim'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message name={name} age={35} />
      </header>
    </div>
  );
}

export default App;
