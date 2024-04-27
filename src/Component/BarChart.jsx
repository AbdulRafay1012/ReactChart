
import { CategoryScale, Chart as ChartJS, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import React from 'react'

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement
)

export default function BarChart() {
    const data = {
        labels: ["2021", "2022", "2023","2024"],
        datasets: [
            {
                label: "No of Votes",
                data: [1000, 700, 200, 100],
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 5,
            }, {
                label: "Pti Votes",
                data: [100, 700, 800, 1000],
                backgroundColor: "red",
                borderColor: "green",
                borderWidth: 5,
            }
        ]
    }
    const Final = {
        labels: ["2021", "2022", "2023","2024"],
        datasets: [
            {
                label: "No of Votes",
                data: [300, 700, 800, 1000],
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 5,
            }, {
                label: "Pti Votes",
                data: [100, 70, 200, 100],
                backgroundColor: "red",
                borderColor: "green",
                borderWidth: 5,
            }
        ]
    }
    return (
        <div><h1 style={{textAlign:'center'}}>BarChart</h1>
            <div className="container" style={{ width: 500, height: 400 }}>
                <div className="row">
                    <div className="col col-lg-6">
                        <Bar data={data} />
                        <h1 style={{textAlign:'center'}}>Final Result</h1>
                        <Bar data={Final} />

                    </div>
                </div>
            </div>
        </div>
    )
}
