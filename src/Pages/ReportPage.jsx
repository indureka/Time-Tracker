import React, { useContext } from "react";
import Chart from "../Components/Chart";

import { formatTime } from '../Components/TaskInput'; 
import { useTaskContext } from "../Contexts/TaskContext";

const ReportPage = () => {
    const { totalConsumedTime } = useTaskContext();

    return (
        <div className="report-page">
             <p className="report-time">TotalTime: <span className="report-timeValue">
                      {formatTime(totalConsumedTime)} 
                      </span>
                      </p>
        <div className="chart-container">
            
            {/* <h2>Task Report</h2> */}
           
            <Chart/>
        </div>
        </div>
    )
}


export default ReportPage;