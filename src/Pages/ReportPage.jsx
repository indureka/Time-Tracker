import React from "react";
import Chart from "../Components/Chart";

const ReportPage = () => {

    return (

        <div className="chart-container">
            <h2>Task Report</h2>
            <p>View the time taken for each task or project below:</p>
            <Chart/>
        </div>
    )
}


export default ReportPage;