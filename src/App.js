
import "./App.scss";
import { Message } from "./components/message/Message";


const name = 'Klim'


function App() {
  const foo = () => {
    alert(`How are you ${name}`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Message name={name} age={35} foo={foo} purple={true}/>
        <Message name="Other name" age={76} foo={foo}/>
      </header>
    </div>
  );
}

export default App;
