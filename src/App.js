import './App.css';
import Counter from './Components/Counter';
import { List } from './Components/List';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Concepts!</p>
        <Counter />
        <List />
       
      </header>
    </div>
  );
}

export default App;
