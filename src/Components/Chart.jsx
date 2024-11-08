import React from "react";
import { useContext } from "react";
import TaskContext from "../Contexts/TaskContext";
import { Bar } from "react-chartjs-2";


const Chart = () => {
    const { chartData } = useContext(TaskContext);

    return (


    <div>
        <Bar
        data={chartData}
        options={{
            responsive:true,
            scales: {
                x: {
                    title:{
                        display:true,
                        text:"Task/Project",
                    }
                },
                y: {
                    beginAtZero:true,
                    title: {
                        display:true,
                        text:"Time Taken (seconds)",
                    }
                }
            },
            plugins:{
                legend:{
                    display:true,
                    position:"top",
                }
            }

        }}
        />

    </div>
    )


}


export default Chart;