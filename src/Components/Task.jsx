import React, { useContext } from "react";
import TaskContext from "../Contexts/TaskContext";
import { formatTime } from './TaskInput'; 



const Task = ({task}) => {

    const { removeTask } = useContext(TaskContext)

    const handleRemove = () => {
        removeTask(task.id);
    };

    return (


        <div key={task.id}>

      
         
            <div className="task-list">
               
                        <div className="task-name">
                            <p>{task.taskName}</p>
                        </div>
                        <div className="time-detail">
                            <p>{task.startTime}</p>

                            <p>-</p>
                            
                            <p>{task.stopTime}</p>
                            
                            <p>{formatTime(task.totalTime)}</p>
                        </div>
               
                <div>
                    <button onClick={handleRemove} className="btn">Remove Task</button> 
                </div>
            </div>

            
        </div>
    )
}



export default Task;