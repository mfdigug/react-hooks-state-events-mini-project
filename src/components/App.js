import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from 'uuid';

import { CATEGORIES, TASKS } from "../data";


function App() {

  const tasks = TASKS.map((task) => {
    return{
    ...task,
    id: uuidv4()
    }
  });

  const [taskList, setTaskList] = useState(tasks)

  function handleDeleteTask(id){
    console.log(id)

    const newTaskList = taskList.filter(task => task.id !== id)
    setTaskList(newTaskList)


  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList taskList={taskList} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
