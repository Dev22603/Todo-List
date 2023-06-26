import "./InputTask.css";
import React from "react";
import { useState } from "react";

function InputTask(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // console.log(enteredName);
  };
  const durationChangeHandler = (event) => {
    setEnteredDuration(event.target.value);
    // console.log(enteredDuration);
  };




  const submitHandler = (event) => {
    event.preventDefault();
    const todo={
      name:enteredName,
      duration:enteredDuration
    };
    // console.log(todo);
    props.onSaveTodo(todo);
   
    setEnteredName('');
    setEnteredDuration('');
    
    
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="inputField">
        <div className="TName">
          <label htmlFor="TaskName">Task: </label>
          <input
            type="text"
            id="TaskName"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="TDuration">
          <label htmlFor="TaskDuration">Duration: </label>
          <input
            type="number"
            id="TaskDuration"
            value={enteredDuration}
            onChange={durationChangeHandler}
          />
        </div>
        <button type="submit">ADD</button>
      </div>
    </form>
  );
}
export default InputTask;
