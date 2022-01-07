import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./EHPlineGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  tension: 0.35,
  responsive: true,
  scales: {
    y: {
        beginAtZero: true
    }
},
plugins: {
    legend: {
      display: false
    }
  }
};

const labels = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
];

const lineData = [
    400, 200, 550, 660, 741, 465, 654, 465, 468, 700, 400, 200, 550, 660,
    741, 465, 654, 465, 468, 700,
  ];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: lineData.map(item => item) ,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const EHPlineGraph = () => {
  return (
    <div className="ehp-linegraph">
      <h2 className="eph-summary-heading">
        PAPUA NEW GUINEA OVERALL COVID-19 SUMMARY
      </h2>
      <p className="eph-summary-subheading">Updated at November 19, 2001</p>

      <div className="ehp-linegraph-main">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default EHPlineGraph;
