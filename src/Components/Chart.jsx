11

import React from "react";
import { useContext } from "react";
import TaskContext from "../Contexts/TaskContext";
import { Bar } from "react-chartjs-2";


const Chart = () => {
    const { chartData } = useContext(TaskContext);

    return (
        <div className="chart-container">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Task/Project',
                    font: {
                      size: 14,
                      weight: 'bold',
                    },
                    color: '#333',
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: '',
                    font: {
                      size: 14,
                      weight: 'bold',
                    },
                    color: '#333',
                  },
                },
              },
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                  labels: {
                    color: '#333',
                    font: {
                      size: 12,
                    },
                  },
                },
              },
            }}
          />
        </div>
      );

}


export default Chart;