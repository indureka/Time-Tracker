import React from "react";



const Task = ({task, removeTask }) => {

    return (


        <div key={task.id}>
            <h4>Task-Details</h4>
            <div className="task-list">
                <div>
                    <p>Task:{task.taskName}</p>
                </div>
                <div className="time-detail">
                    <p>Start Time:   {task.startTime}</p>
                    <br/>
                    <p>Stop Time:    {task.stopTime}</p>
                    <br/>
                    <p>Time Taken:   {task.totalTime} seconds</p>
                </div>
                <div>
                    <button onClick={removeTask}>Remove Task</button> 
                </div>
            </div>
        </div>
    )
}



export default Task;