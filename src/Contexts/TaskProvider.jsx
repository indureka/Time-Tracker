  import React, { useState, useEffect} from "react";
  import TaskContext from "./TaskContext";

  export const TaskProvider = ({ children }) => {
  
  const [taskName, setTaskName] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [stopTime, setStopTime] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [totalConsumedTime, setTotalConsumedTime] = useState(0);

// handlechange
  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  //handlesubmit

  const handleSubmit = () => {
   
    if (!isRunning && taskName && startTime && stopTime) {
      addTask(taskName, startTime, stopTime, count);
      resetForm();
    } else {
      console.error("Please complete the task properly.");
    }
  };

  //reset values

  const resetForm = () => {
    setTaskName(""); // Clear input
    setCount(0); // Reset timer
    setStartTime(""); // Reset start time
    setStopTime(""); // Reset stop time
  };

  //start timer

  const startTimer = () => {
    
    setIsRunning(true); // starts the timer
    setStartTime(new Date().toLocaleString()); // store start time
    console.log("timer On");
  };

  //stoptimer

  const stopTimer = () => {
    setIsRunning(false); // stops the timer
    setStopTime(new Date().toLocaleString()); // store stop time
    console.log("timer Off");
    
  };

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

    console.log("added", updatedTask);
    console.log(updatedTask);
  };


//remove task

  const removeTask = (id) => {
    console.log("Before removal:", taskArray); // Log before removal
    console.log("Removing task with ID:", id);
    const updatedTask = taskArray.filter((task) => task.id !== id);
    
    console.log("After filtering:", updatedTask); // Log after filtering
    setTaskArray(updatedTask); // Update the task array
    setTotalConsumedTime(calculateTime(updatedTask)); // Update total consumed time
};


//calculatetime  
  const calculateTime = (taskArray) => {
    return taskArray.reduce((acc, task) => acc + task.totalTime, 0);
  };

    // Use effect to handle task submission when the timer stops
    useEffect(() => {
      if (!isRunning && taskName && startTime && stopTime) {
        addTask(taskName, startTime, stopTime, count);
        resetForm(); // Reset the form after adding the task
      } else if (!isRunning) {
        console.error("Please complete the task properly.");
      }
    }, [isRunning]); // Only run when isRunning changes

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
    <TaskContext.Provider
        value={{
            taskArray, totalConsumedTime, taskName, setTaskName,
            isRunning, setIsRunning, count, setCount,
            startTime, setStartTime, stopTime, setStopTime,
            handleChange, resetForm, startTimer, stopTimer,
            addTask, removeTask, handleSubmit
        }} >
                {children}
        </TaskContext.Provider>
   
)


}