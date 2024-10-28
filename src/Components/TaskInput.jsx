import React, { useEffect, useState } from "react";
import TaskManager from "./TaskManager";

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [stopTime, setStopTime] = useState("");

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Only add task if the timer has stopped
    if (!isRunning && taskName && startTime && stopTime) {
      addTask(taskName, startTime, stopTime, count);
      resetForm();
    } else {
      console.error("Please complete the task properly.");
    }
  };

  const resetForm = () => {
    setTaskName(""); // Clear input
    setCount(0); // Reset timer
    setStartTime(""); // Reset start time
    setStopTime(""); // Reset stop time
  };

  const startTimer = () => {
    setIsRunning(true); // starts the timer
    setStartTime(new Date().toLocaleString()); // store start time
    console.log("timer On");
  };

  const stopTimer = () => {
    setIsRunning(false); // stops the timer
    setStopTime(new Date().toLocaleString()); // store stop time
    console.log("timer Off");
  };

  useEffect(() => {
    let counter;

    if (isRunning) {
      counter = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
        //  console.log(prevCount);
      }, 1000);
    }
    return () => clearInterval(counter);
  }, [isRunning]);

  return (
    <>
      <h1>To do App</h1>

      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <div className="task-input">
            <input
              type="text"
              value={taskName}
              onChange={handleChange}
              placeholder="What are you working on ?"
              required
              className="input-field"
            />

            <button type="button" onClick={startTimer} className="btn">
              Start
            </button>

            <button type="button" onClick={stopTimer} className="btn">
              Stop
            </button>
          </div>
          <div>
            <span className="task-detail">
              <span className="timer">Timer: {count} seconds</span>
              <button type="submit" className="add-btn">
                Add task
              </button>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskInput;
