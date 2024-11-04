import React from "react";
import Task from "./Task";
import { useTaskContext } from "../Contexts/TaskContext";

const TaskList = () => {
  const { taskArray, removeTask } = useTaskContext(); 

  return (

    <div>
    {taskArray.map((task) => (
        <Task key={task.id} task={task} removeTask={() => removeTask(task.id)} />
    ))}
</div>
  );
};

export default TaskList;
