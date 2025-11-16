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

  const [taskList, setTaskList] = useState(tasks);
  const [filterBy, setFilterBy] = useState("All");
  
  function handleDeleteTask(id){
    const newTaskList = taskList.filter(task => task.id !== id)
    setTaskList(newTaskList)
  }

  function onHandleFilterClick(id){
    const newFilter = id;
    setFilterBy(newFilter)
  }

  function handleAddTask(newTask){
    const newTaskList = [...taskList, newTask]
    setTaskList(newTaskList)
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onHandleFilterClick={onHandleFilterClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList taskList={taskList} handleDeleteTask={handleDeleteTask} filterBy={filterBy}/>
    </div>
  );
}

export default App;
