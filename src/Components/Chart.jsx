11

import React from "react";
import { useContext } from "react";
import TaskContext from "../Contexts/TaskContext";
import { Bar } from "react-chartjs-2";


const Chart = () => {
    const { chartData } = useContext(TaskContext);

    return (


    <div style={{minWidth:"900px", minHeight:"350px",
    padding:"20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    }}>
        <Bar
        data={chartData}
        options={{
            responsive:true,
            scales: {
                x: {
                    title:{
                        display:true,
                        text:"Task/Project", 
                        font:{
                            size: 14,
                            weight:"bold"
                        },
                        color: "#333",
                    }
                },
                y: {
                    beginAtZero:true,
                    title: {
                        display:true,
                        text:"",
                        font:{
                            size:14,
                            weight:"bold",
                        },
                        color:"#333",
                    }
                }
            },
            plugins:{
                legend:{
                    display:true,
                    position:"top",
                    labels:{
                        color:"#333",
                        font:{
                            size:12
                        }
                    }
                }
            }

        }}
        />

    </div>
    )


}


export default Chart;