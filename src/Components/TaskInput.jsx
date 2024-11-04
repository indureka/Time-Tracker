import React, { useEffect, useState } from "react";
import TaskManager from "./TaskManager";
import { useContext } from "react";
import TaskContext from "../Contexts/TaskContext";

export const formatTime = (totalSeconds) => {
  const hours = String(Math.floor(totalSeconds/3600)).padStart(2,'0');
  const minutes = String(Math.floor((totalSeconds%3600)/60)).padStart(2,'0');
  const seconds = String(totalSeconds%60).padStart(2,'0');
  return `${hours}:${minutes}:${seconds}`;
}


const TaskInput = () => {
  const {
    taskName,
    handleChange,
    isRunning,
    startTimer,
    stopTimer,
    count,
  } = useContext(TaskContext);



 
  return (
    <>
      <h1>To do App</h1>

      <div className="task-input">
      
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              value={taskName}
              onChange={handleChange}
              placeholder="What are you working on ?"
              required
              
              disabled={isRunning}
            />
            </div>

            <div className="time-box">

            <p className="timer">{formatTime(count)}</p>

          {isRunning ? (
                <button type="button" onClick={stopTimer} className="btn">
                Stop
              </button>
          ) : (<button type="button" 
            onClick={startTimer} className="btn">
              Start
            </button>
          )}
  
          
          
        
              
             
            
          </div>
        </form>
      </div>
    </>
  );
};



export default TaskInput;
