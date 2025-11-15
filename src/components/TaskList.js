import React from "react";
import { v4 as uuid } from 'uuid';
import Task from './Task'

function TaskList({ TASKS }) {
  
  return (
    <div className="tasks">
      {TASKS.map((task) => {
        return(
          <Task key={uuid()} text={task.text} category={task.category} />    
        )
      })}
    </div>
  );
}

export default TaskList;
