import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useTaskContext } from "../Contexts/TaskContext";
import { formatTime } from './TaskInput'; 

const TaskManager = () => {

  const { taskArray, totalConsumedTime, addTask, removeTask } = useTaskContext();

 

  return (
    <div className="task-box">
      <TaskInput addTask={addTask} />

      <div className="task-heading">
        <p>Task-Details</p>

        <p>TotalTime: <span className="totaltime">
          {formatTime(totalConsumedTime)} 
          </span>
          </p>
      </div>

      <TaskList taskArray={taskArray} removeTask={removeTask} />
    </div>
  );
};

export default TaskManager;
