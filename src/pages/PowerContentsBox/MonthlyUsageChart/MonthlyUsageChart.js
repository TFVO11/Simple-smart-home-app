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

const dummyMonthlyUsageData = [
  {
      label : "Week1",
      usageWatts : 1000,
  },
  {
      label : "Week2",
      usageWatts : 2000,
  },{
      label : "Week3",
      usageWatts : 4000,
  },{ 
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
const labelsList = dummyMonthlyUsageData.map((item) => item.label)

const usageWattsList = dummyMonthlyUsageData.map((item) => item.usageWatts)

const chartData = {
  labels: labelsList,
  datasets: [{
    data: usageWattsList,
    borderWidth: 2,
    hoverBackgroundColor:["red"]
  }],
  options : {
    legend : {
      display : false
    }
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
