import  './TaskItem.css'
// import Increment 
import React from 'react'

function TaskItem(props) {
 
  return (
    <div className="Task">
      <div className="Name">
        <h3>{props.taskName}</h3>
      </div>
      <div className="Duration">
        <h3>{props.taskDuration} Hr</h3>
      </div>
      <div className="Urgency">
        <h3>Urgency : {props.taskUrgency} </h3>
      </div>
      <div className="Importance">
        <h3>Importance : {props.taskImportance} </h3>
      </div>
    </div>
  );
}
export default TaskItem;
