import { CategoryScale, Chart as ChartJS, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import React from 'react'

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)

function LineChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
            {
                label: "# Web and App",
                data: [60, 36, 24, 16],
                backgroundColor: "red",
                borderColor: "green",
               
            },
            {
                label: "# CCO",
                data: [20, 36, 50, 160],
                backgroundColor: "yellow",
                borderColor: "orange",
               
            }
        ]
    }
    var option={
        
    }
    return (
        <div><h1 style={{textAlign:'center'}}>LineChart</h1>
            <div className="container" style={{width:500, height:400}}>
                <div className="row">
                    <div className="col col-lg-6">
                        <Line data={data} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineChart