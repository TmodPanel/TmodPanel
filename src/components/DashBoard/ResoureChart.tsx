import { Grid, Paper } from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  elements,
  scales,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  elements,
  scales,
  Filler,
);

const options = {
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
      },
    },
    x: {
      ticks: {
        callback: function (value: any, index: any, values: any) {
          if (index % 2 === 0) {
            return value;
          } else {
            return '';
          }
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = [
  '15:00',
  '15:05',
  '15:10',
  '15:15',
  '15:20',
  '15:25',
  '15:30',
  '15:35',
  '15:40',
  '15:45',
  '15:50',
  '15:55',
  '16:00',
];

// NewData 返回 data 的副本
const NewData = (name: string, data: number[]) => {
  return {
    labels,
    datasets: [
      {
        label: name,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        data: data,
        lineTension: 0.4,
        fill: true,
        pointRadius: 1,
        pointHitRadius: 10,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#36A2EB',
        pointHoverBorderColor: '#36A2EB',
        pointHoverBorderWidth: 2,
      },
    ],
  };
};

function MemChart() {
  const data = NewData(
    'Memory Usage',
    // 随机 20-50
    Array.from({ length: 13 }, () => Math.floor(Math.random() * 30 + 20)),
  );
  const [Mem, setMem] = React.useState(data);
  return (
    <Line
      data={Mem}
      options={{ ...options, plugins: { title: { text: 'Memory Usage' } } }}
    />
  );
}

function CpuChart() {
  const data = NewData(
    'CPU Usage',
    // 随机
    Array.from({ length: 13 }, () => Math.floor(Math.random() * 30 + 20)),
  );
  const [Cpu, setCpu] = React.useState(data);
  return (
    <Line
      data={Cpu}
      options={{ ...options, plugins: { title: { text: 'CPU Usage' } } }}
      style={{ width: '100%' }}
    />
  );
}

export default function ResoureChart() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper>
          <MemChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper>
          <CpuChart />
        </Paper>
      </Grid>
    </Grid>
  );
}
