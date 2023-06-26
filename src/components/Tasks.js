import React from "react";
import Card from "../UI/Card";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  return (
    <Card className="TaskBox">
      {props.todoList.map((todo) => (
        <TaskItem
          taskName={todo.name}
          taskDuration={todo.duration}
          key={todo.id}
        />
      ))}
    </Card>
  );
};
export default Tasks;
