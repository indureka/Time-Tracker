import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";



const TaskManager = () => {

const [taskArray, setTaskArray] = useState([]);

const addTask = (taskName, startTime, stopTime, totalTime) =>{
    setTaskArray(currentTask => 
    [...currentTask, 
       {id: Date.now(), taskName, startTime, stopTime, totalTime}]
    );
    console.log("added",setTaskArray)
    console.log(taskArray);
};



const removeTask = (index) => {
    setTaskArray(currentTask => currentTask.filter ((item, i) => i !== index));
};

    return (


        <div>
         
      <TaskInput addTask={addTask}/>
    
      <TaskList taskArray={taskArray} removeTask={removeTask}/>
        
        </div>
    );
};


export default TaskManager;