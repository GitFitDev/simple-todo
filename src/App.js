import './App.css';
import DenseAppBar from './components/appBar';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
