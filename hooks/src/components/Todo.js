import React from "react";

function Todo(props) {
  return (
    <div>
      <div>{props.todo.text}</div>
    </div>
  );
}
export default Todo;
