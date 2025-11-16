import React from "react";
import Task from './Task';

function TaskList({ taskList, handleDeleteTask, filterBy }) {

  const tasksToDisplay = taskList.filter((task) => {
    if (filterBy==="All"){
      return true;
    } else {
      return task.category === filterBy;
    }
  })

const displayTasks = tasksToDisplay.map((task) => {
        return <Task
        key={task.id}
        task={task}
        onHandleDeleteTask={handleDeleteTask}
        />
      })


  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
