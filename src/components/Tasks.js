import React from "react";
import Card from "../UI/Card";
import TaskItem from "./TaskItem";
import './Tasks.css';

const Tasks = (props) => {
  console.log(props.todoList);
  return (
    <Card className="TaskBox">
      {props.todoList.map((todo) => (
        <TaskItem
          taskName={todo.name}
          taskDuration={todo.duration}
          taskUrgency={todo.Urgency}
          taskImportance={todo.Importance}
          key={todo.id}
        />
      ))}
    </Card>
  );
};
export default Tasks;
