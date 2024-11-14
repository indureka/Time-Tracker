
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ReportPage from "./Pages/ReportPage";
import TaskManager from "./Components/TaskManager";
import { TaskProvider } from "./Contexts/TaskProvider";
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


import "./App.css";

function App() {
  return (
  <>
  
    <h1>Time Tracker</h1>
    <Router>
    <div className="main-container">
      <nav>
      <ul>
        <li>
          <Link to="/" className="home-link">
          <i className="fa-solid fa-house home-icon"></i>
          Home</Link>
        </li>
        <li className="report-link">
          <Link to="/report" >
          <i className="fa-regular fa-clock timer-icon"></i>
          Report</Link>
        </li>
      </ul>

      </nav>

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
