import "./InputTask.css";
import React from "react";
import { useState } from "react";

function InputTask(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");
  const [enteredUrgency, setEnteredUrgency] = useState("1");
  const [enteredImportance, setEnteredImportance] = useState("1");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // console.log(enteredName);
  };
  const durationChangeHandler = (event) => {
    setEnteredDuration(event.target.value);
    // console.log(enteredDuration);
  };
  const urgencyChangeHandler = (event) => {
    setEnteredUrgency(event.target.value);
    // console.log(enteredDuration);
  };
  const importanceChangeHandler = (event) => {
    setEnteredImportance(event.target.value);
    // console.log(enteredDuration);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todo = {
      name: enteredName,
      duration: enteredDuration,
      Urgency: enteredUrgency,
      Importance:enteredImportance,
    };
    // console.log(todo);
    props.onSaveTodo(todo);

    setEnteredName("");
    setEnteredDuration("");
    setEnteredImportance("1");
    setEnteredUrgency("1");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="inputForm">
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
        <div className="TUrgency">
          <label htmlFor="TaskUrgency">Urgency: </label>
          <select name="TaskUrgency" id="TaskUrgency" onChange={urgencyChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="TImportance">
          <label htmlFor="TaskImportance">Importance: </label>
          <select name="TaskImportance" id="TaskImportance"  onChange={importanceChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <div className="buttonDiv">
        <button type="submit">ADD</button>
      </div>
    </form>
  );
}
export default InputTask;
