import React from "react";

function Task({ task, onHandleDeleteTask } ) {

  function handleClick(id){
    onHandleDeleteTask(id)
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => handleClick(task.id)}>X</button>
    </div>
  );
}

export default Task;
