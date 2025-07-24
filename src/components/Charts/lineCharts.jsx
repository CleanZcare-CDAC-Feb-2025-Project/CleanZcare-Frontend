import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import ChartWrapper from './ChartWrapper';

// Register the necessary components for Line charts
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const data = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun'],
  datasets: [
    {
      label: 'Income',
      data: [12, 45, 67, 23, 88, 54],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointStyle: 'circle',
      pointRadius: 4,
      pointHoverRadius: 7
    }
  ]
};

export default function MontlyIncomeChart() {
  return (
    <ChartWrapper title="Monthly Income">
      <Line data={data} />
    </ChartWrapper>
  );
}
