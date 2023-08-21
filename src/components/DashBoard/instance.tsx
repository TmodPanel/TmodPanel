import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
  'rgba(75, 192, 192, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(52, 118, 211, 1)',
];

const data = {
  labels: ['Running', 'Stopped', 'Pending'],
  datasets: [
    {
      label: 'Instance',
      data: [12, 3, 19],
      backgroundColor: [colors[0], colors[1], colors[2]],
      hoverOffset: 4,
      borderWidth: 1,
    },
  ],
};

const options: any = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 0,
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  tooltips: {
    enabled: true,
  },
};
const Label = ({ status, index }: any) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
      <Box
        sx={{
          width: '15px',
          height: '15px',
          backgroundColor: colors[index],
          marginRight: '5px',
        }}
      />
      <Typography variant="subtitle1">{status}</Typography>
    </Box>
  );
};

export default function InstanceChart() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title="Instance Chart"
        titleTypographyProps={{ variant: 'h6' }}
      />
      <Divider />
      <Box
        sx={{
          width: '100%',
          height: '60%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15px',
        }}
      >
        <Doughnut data={data} options={options} width={80} height={80} />
      </Box>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {data.labels.map((status: any, index: any) => (
            <Label status={status} index={index} key={index} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
