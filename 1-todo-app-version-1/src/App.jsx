import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import "./App.css";

const todoItems = [
  {
    name: "Buy milk",
    dueDate: "11/12/2023",
  },
  {
    name: "Go to College",
    dueDate: "11/12/2023",
  },
];

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems TodoItems={todoItems} />
    </center>
  );
}

export default App;
