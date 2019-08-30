import React, { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn react hooks",
      isCompleted: false
    },
    {
      text: "Complete authentication flow",
      isCompleted: false
    }
  ]);
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
