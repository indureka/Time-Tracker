
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
    <Router>
    <div>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
      </ul>

      </nav>

      
      <TaskProvider>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/report' element={<ReportPage/>} />
      </Routes>
           
        </TaskProvider>
    </div>

    </Router>
  );
}

export default App;
