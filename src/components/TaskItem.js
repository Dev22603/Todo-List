import  './TaskItem.css'
// import Increment 
import React from 'react'

function TaskItem(props) {
 
  return (
    <div className="Taskbox">
      <div className="Name">
        <h3>{props.taskName}</h3>
      </div>
      <div className="Duration">
        <h3>{props.taskDuration} Hr</h3>
      </div>
    </div>
  );
}
export default TaskItem;
