
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import ReportPage from "./Pages/ReportPage";
import TaskManager from "./Components/TaskManager";
import { TaskProvider } from "./Contexts/TaskProvider";
// import { myImage } from "../public/assets/logo.jpg";
import "./App.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);





function App() {
  return (
  <>
  
   <div className="menu-bar">
<div className="logo">
  <img src="/assets/logo.jpg" alt="logo" />
  <p>TrackMe</p>
</div>
{/* <div>
  <p>My Workspace</p>
</div> */}
<div className="menu-btn">
<p>
  <i class="fa-solid fa-bell notify"></i>
  </p>
  <button className="login">Loign</button>
  <button className="signup">SignUp</button>
</div>

   </div>
    <Router>
    <div className="main-container">
     
            <NavBar />
      <div className="main-content">
      <TaskProvider>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/report' element={<ReportPage/>} />
      </Routes>
           
        </TaskProvider>
        </div>
    </div>

    </Router>
    </>
  );
}

export default App;
