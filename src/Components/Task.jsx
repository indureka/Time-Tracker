import React from "react";




const Task = ({task, removeTask }) => {

    return (


        <div key={task.id}>
         
           
            <div className="task-list">
                <div>
                    <p><span className="text">Task:</span>{task.taskName}</p>
                </div>
                <div className="time-detail">
                    <p><span className="text">Start Time:  </span>{task.startTime}</p>
                    <br/>
                    <p><span className="text">Stop Time:  </span>  {task.stopTime}</p>
                    <br/>
                    <p><span className="text">Time Taken: </span>  {task.totalTime} seconds</p>
                </div>
                <div>
                    <button onClick={removeTask}>Remove Task</button> 
                </div>
            </div>
        </div>
    )
}



export default Task;