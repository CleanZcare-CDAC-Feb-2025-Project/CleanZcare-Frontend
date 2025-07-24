// src/components/charts/PieChart.jsx
import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import ChartWrapper from "./ChartWrapper";

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
  labels: [
    "AC & Appliance Repair",
    "Cleaning & Pest Control",
    "Electrician",
    "Plumber & Carpenter",
    "Water Purifier Repair",
    "Painter & Waterproofing",
    "Women's salon & spa",
    "Men's salon & Massage",
  ],
  datasets: [
    {
      //   label: ['Service Distribution',"d"],
      data: [120, 202, 120, 203, 304, 450, 400, 300],
      backgroundColor: [
        "#3b82f6", // Blue
        "#10b981", // Emerald Green
        "#f59e0b", // Amber
        "#ef4444", // Red
        "#8b5cf6", // Violet
        "#ec4899", // Pink
        "#14b8a6", // Teal
        "#6366f1", // Indigo
      ],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true, // important to let it grow with container
  cutout: "40%", // optional: for doughnut thickness
  radius: "100%", // controls the size of the chart relative to canvas
  layout: {
    padding: {
      right: -170,
    },
  },
  plugins: {
    legend: {
      position: "left",
      labels: {
        boxWidth: 10,
        padding: 10,
      },
    },
  },
};
export default function CategoryWiseOrdersChart() {
  return (
    <ChartWrapper title="Category Wise Services %" classNames={" h-[500px]"}>
      <div className="flex w-full max-w-5xl mx-auto h-[400px]">
        <div className="w-full h-full flex justify-around">
          <Doughnut data={pieData} options={options} />
        </div>
      </div>
    </ChartWrapper>
  );
}
