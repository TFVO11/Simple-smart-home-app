import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import { Faker } from "faker";

const dummyMonthlyUsageData = [
  {
      id : "week1",
      label : "Week1",
      usageWatts : 1000,
  },
  {
      id : "week2",
      label : "Week2",
      usageWatts : 2000,
  },{
      id : "week3",
      label : "Week3",
      usageWatts : 4000,
  },{
      id : "week4",
      label : "Week4",
      usageWatts : 800,
  },
]

ChartJs.register (
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

// const chartOption = {
//   responsive: true,
//   plugins: {

//   }
// }

const labels = dummyMonthlyUsageData.map(
  (items) = item.label
)


const chartData = {
  labels,
  datasets: {
    data: labels.map(
      () => dummyMonthlyUsageData.usageWatts
    )
  }
}


const MonthlyUsageChart = () => {
  return (
    <div>
      <Line data={chartData}/>
    </div>
  )
}

export default MonthlyUsageChart;
