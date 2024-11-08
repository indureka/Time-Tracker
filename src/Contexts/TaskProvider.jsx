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
  const [projectName, setProjectName] = useState("");
  const [isBillEnable, setIsBillEnable] = useState(false);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Time Taken',
        data:[],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',    
      }
    ]
  })

// handlechange
  const handleChange = (event) => {
    setTaskName(event.target.value);
  };


//handle ProjectName  

const handleProject = (e) => {
  const project=prompt("Enter project name");
  if(project)
  setProjectName(project || "");
};


//handle bill

const handleBill = (e) => {
setIsBillEnable((prev) => !prev);
}

  //handlesubmit

  const handleSubmit = () => {
   
    if (!isRunning && taskName && startTime && stopTime) {
      const totalTime = count;
      addTask(taskName, projectName, isBillEnable, startTime, stopTime, totalTime);
      resetForm();
    } else {
      console.error("Please complete the task properly.");
    }
  };

  //reset values

  const resetForm = () => {
    setTaskName(""); // Clear input
    setProjectName("") // clear projectName
    setCount(0); // Reset timer
    setStartTime(""); // Reset start time
    setStopTime(""); // Reset stop time
    setIsBillEnable(false); // false
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

  const addTask = (taskName, projectName, isBillEnable, startTime, stopTime, totalTime) => {
    const newTask = {
      id: Date.now(),
      taskName,
      isBillEnable,
      projectName,
      startTime,
      stopTime,
      totalTime,
    };
    const updatedTask = [...taskArray, newTask];
    setTaskArray(updatedTask);

    setTotalConsumedTime(calculateTime(updatedTask));

    console.log("added", updatedTask);
    console.log(updatedTask);
    updateChartData(newTask);
    console.log("updatedchart", updateChartData)
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
        addTask(taskName, projectName, isBillEnable, startTime, stopTime, count);
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


  //Update chart data

  const updateChartData = (task) => {
    setChartData(prevData => ({
      labels: [...prevData.labels, task.projectName || task.taskName],
      datasets: [{
        label: 'Time Taken',
        data: [...prevData.datasets[0].data, task.totalTime]
     }]
    }));
  };

 


return (
    <TaskContext.Provider
        value={{
            taskArray, totalConsumedTime, taskName, setTaskName,
            projectName, setProjectName,
            isBillEnable, setIsBillEnable,
            isRunning, setIsRunning, count, setCount,
            startTime, setStartTime, stopTime, setStopTime,
            handleChange, resetForm, startTimer, stopTimer,
            addTask, removeTask, handleSubmit, handleProject,
            handleBill, chartData, setChartData, updateChartData
            
        }} >
                {children}
        </TaskContext.Provider>
   
)


}