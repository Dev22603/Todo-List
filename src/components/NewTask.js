import React from "react";

import InputTask from "./InputTask";
import "./NewTask.css";

const NewTask = (props) => {
  const saveTodoDataHandler = (todo) => {
    const Todo = {
      ...todo,
      id: Math.random().toString(),
    };
    props.onAddTodo(Todo);
  };
  return (
    <div className="new-todo">
      <InputTask onSaveTodo={saveTodoDataHandler} />
    </div>
  );
};


export default NewTask;
