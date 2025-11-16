import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const categoryOptions = categories.map((category) => {
    if (category === "All"){
      return null
      } else {
        return(
          <option value={category}>
            {category}
          </option>
        )
      }
    })

    const [newTask, setNewTask] = useState({
      id: uuidv4(),
      text: "",
      category: ""
    })
  

  function handleChange(e){
    const key = e.target.name;
    const value = e.target.value
    setNewTask({
      ...newTask,
      [key]:value
    })
  }
  console.log(newTask)

   function handleSubmit(e){
     e.preventDefault();
     onTaskFormSubmit(newTask);
      setNewTask({
      id: uuidv4(),
      text: "",
      category: ""
   })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleChange}/>
      </label>
      
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
