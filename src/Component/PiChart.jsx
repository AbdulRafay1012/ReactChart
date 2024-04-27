import React from 'react'
import { CategoryScale, Chart as ChartJS, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement,  } from 'chart.js'
import { Pie} from 'react-chartjs-2'


ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, Pie
)

function pichart() {
    const data = {
        labels: ["2020", "2021", "2022"],
        datasets: [
            {
                label: "No of Votes",
                data: [1000, 700, 200, 100],
                backgroundColor: ["green","orange", "yellow","black"],
                borderColor: "black",
                borderWidth: 5,
            }
        ]
    }
  return (
    <div>PiChart
        <div className="container" style={{ width: 500, height: 400 }}>
                <div className="row">
                    <div className="col col-lg-6">
                        <Bar data={data} />

                    </div>
                </div>
            </div>
    </div>
  )
}

export default pichart