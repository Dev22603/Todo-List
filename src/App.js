import "./App.css";
import Tasks from "./components/Tasks";
import InputTask from "./components/InputTask";
import React, { useEffect, useState } from "react";
import moment from "moment";
import $ from "jquery";

const Initialtodos = [
  {
    id: 0,
    name: "Codeforces",
    duration: 2,
  },
  {
    id: 1,
    name: "React Project",
    duration: 1,
  },
  {
    id: 2,
    name: "Space Reading",
    duration: 1,
  },
];

function App() {
  const [Todos, setTodos] = useState(Initialtodos);

  const addTodoHandler = (Todo) => {
    setTodos((prevTodos) => {
      //Here the prevTodos automatically receives the previous state snapshot of the react for that state for which you are calling the updating function
// As explained in the 76th video of Udemy tutorial in section 5
      return [Todo, ...prevTodos];
    });
  };

  // const saveNewTodo = (enteredTodo) => {
  //   const todo = {
  //     ...enteredTodo,
  //     id: Math.random().toString(),
  //   };
  //   console.log(todo);
  // };

  var page_background_colors = [
    ["#B61116", "#239ED8", "#516CB4", "#FBAE14", "#FBC60D"],
    ["#FF3D60", "#C1E88F", "#FFFD98", "#40D6A6", "#BDE4A7"],
    ["#FF3D60", "#E0DBB8", "#3B474F", "#226F54", "#87C38F"],
  ];
  useEffect(
    () => {
      /*const interval = */ setInterval(() => {
        document.body.style.backgroundColor =
          page_background_colors[
            parseInt(Math.random() * page_background_colors.length)
          ][parseInt(Math.random() * 5)];
      }, 10000);

      // return () => clearInterval(interval);
    } /*,[]*/
  );

  //this code does not require jquery and..... [] is commented as its not required but i am keeping it so that i know that it is included
  //Also const interval = is not required

  // or

  //     setInterval(function() {
  //         $('body').css({
  //           "background-color": page_background_colors[
  //     parseInt(Math.random() * page_background_colors.length)
  //     ][parseInt(Math.random() * 5)]
  //   })
  // }, 1000);         //this code requires the jquery library

  return (
    <div>
      <InputTask onSaveTodo={addTodoHandler}></InputTask>
      <Tasks todoList={Todos}> </Tasks>
    </div>
  );
}

export default App;
