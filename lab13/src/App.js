
import AddTask from './AddTask';
import './App.css';
import Calculator from './Calculator';
import TodoList from './TodoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Calculator></Calculator>
     <AddTask></AddTask>
     <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
