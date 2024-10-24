import React from "react";
import Task from "./Task";


const TaskList = ({ taskArray, removeTask }) => {


    return(

        <div>

         
       {taskArray.map((task, index) =>(

    <Task key={task.id} task={task} removeTask={() => removeTask(index)} />




    ))}
       
        </div>
    )
}

export default TaskList;