// src/components/charts/PieChart.jsx
import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';
import ChartWrapper from './ChartWrapper';

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
  labels: ['Professionals', 'End Users'],
  datasets: [
    {
    //   label: ['Service Distribution',"d"],
      data: [300, 500],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
    },
  ],
};

export default function UserDougnetChart() {
  return (
    <ChartWrapper title="User Roles">
      <Doughnut data={pieData}  className='max-w-md'/>
    </ChartWrapper>
  );
}
