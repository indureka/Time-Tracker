import React, { useEffect, useState, useRef } from "react";
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
    projectName,
    handleProject,
    handleBill,
    handleChange,
    isRunning,
    startTimer,
    stopTimer,
    count,
    handleProjectNameChange, isProjectInputVisible
  } = useContext(TaskContext);


  const inputRef = useRef(null); 

  useEffect(() => {
    if (isProjectInputVisible) {
      inputRef.current.focus(); // Focus on the input when it becomes visible
    }
  }, [isProjectInputVisible]);
 
  return (


    <>
    <div className="task-input">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-container">
          <input
            type="text"
            value={taskName}
            onChange={handleChange}
            placeholder="What are you working on ?"
            required
            disabled={isRunning}
          />
          {!isProjectInputVisible ? (
            <button onClick={handleProject} className="project-btn">
              +Project
            </button>
          ) : (
            <input
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={handleProjectNameChange}
              ref={inputRef} // Reference to the input box
            />
          )}
        </div>

        <div className="time-box">
          <p className="project-title">{projectName}</p>
          <button onClick={handleBill} className="bill-btn">
            $
          </button>
          <p className="timer">{formatTime(count)}</p>
          {isRunning ? (
            <button type="button" onClick={stopTimer} className="btn">
              Stop
            </button>
          ) : (
            <button type="button" onClick={startTimer} className="btn">
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
