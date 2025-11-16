import React, { useState } from "react";
import Task from './Task';

function TaskList({ taskList, handleDeleteTask }) {

const tasksToDisplay = taskList.map((task) => {
        return <Task
        key={task.id}
        task={task}
        onHandleDeleteTask={handleDeleteTask}
        />
      })


  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
