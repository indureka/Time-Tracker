import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TaskManager = () => {
  const [taskArray, setTaskArray] = useState([]);
  const [totalConsumedTime, setTotalConsumedTime] = useState(0);

  // Add task

  const addTask = (taskName, startTime, stopTime, totalTime) => {
    const newTask = {
      id: Date.now(),
      taskName,
      startTime,
      stopTime,
      totalTime,
    };
    const updatedTask = [...taskArray, newTask];
    setTaskArray(updatedTask);

    setTotalConsumedTime(calculateTime(updatedTask));

    console.log("added", setTaskArray);
    console.log(taskArray);
  };

  // Calculate totaltime consumed

  const calculateTime = (taskArray) => {
    return taskArray.reduce((acc, task) => acc + task.totalTime, 0);
  };

  // Remove task

  const removeTask = (index) => {
    const updatedTask = taskArray.filter((item, i) => i !== index);
    setTaskArray(updatedTask);

    setTotalConsumedTime(calculateTime(updatedTask));
  };

  return (
    <div className="main-div">
      <TaskInput addTask={addTask} />

      <div className="box-title">
        <h4>Task-Details</h4>

        <p className="time-taken">TotalTime: {totalConsumedTime} </p>
      </div>

      <TaskList taskArray={taskArray} removeTask={removeTask} />
    </div>
  );
};

export default TaskManager;
