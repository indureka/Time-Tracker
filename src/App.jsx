
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import ReportPage from "./Pages/ReportPage";
import { TaskProvider } from "./Contexts/TaskProvider";
import MenuBar from "./Components/MenuBar";
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
    <Router>
  <>
  
  <MenuBar />
    
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

  
    </>
    </Router>
  );
}

export default App;
