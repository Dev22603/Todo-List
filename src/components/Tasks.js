import React from "react";
import Card from "../UI/Card";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  return (
    <Card className="TaskBox">
      <TaskItem
        taskName={props.todoList[0].name}
        taskDuration={props.todoList[0].duration}
      ></TaskItem>
      <TaskItem
        taskName={props.todoList[1].name}
        taskDuration={props.todoList[1].duration}
      ></TaskItem>
      <TaskItem
        taskName={props.todoList[2].name}
        taskDuration={props.todoList[2].duration}
      ></TaskItem>
    </Card>
  );
};
export default Tasks;
