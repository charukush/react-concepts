import './App.css';
import Counter from './components/Counter';
import { List } from './components/List';
import ListTest from './components/ListTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Concepts!</p>
        <Counter />
        <List />
        <ListTest />
      </header>
    </div>
  );
}

export default App;
