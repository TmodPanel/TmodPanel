import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Paper, Typography, Grid, Box } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const Usage = styled('div')(({ theme }) => ({
  width: '12px',
  height: '12px',
  backgroundColor: `rgba(62, 144, 255, 1)`,
  marginRight: '5px',
  borderRadius: '50%',
}));

const Free = styled('div')(({ theme }) => ({
  width: '12px',
  height: '12px',
  marginLeft: '15px',
  backgroundColor: `rgba(238, 238, 238, 1)`,
  marginRight: '5px',
  borderRadius: '50%',
}));

function Progress({ data }: any) {
  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={data} />

      <div
        style={{
          display: 'flex',
          marginTop: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Usage />
          <Typography variant="body2" component="div">
            Usage
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Free />
          <Typography variant="body2" component="div">
            Free
          </Typography>
        </div>
      </div>
    </Box>
  );
}

export function ResourceUsage({ title, currentUsage, total }: any) {
  const usagePercentage = (currentUsage / total) * 100;

  let formattedPercentage;
  if (parseInt(usagePercentage.toString()) !== 0) {
    formattedPercentage = Math.round(usagePercentage);
  } else {
    formattedPercentage = usagePercentage.toFixed(2);
  }
  const usageTexts = {
    CPU: `${currentUsage}%`,
    Memory: `${currentUsage}GB`,
    Disk: `${currentUsage}GB`,
  };

  const titleStyle = {
    lineHeight: '1.5',
    color: '#3ac47d',
    fontWeight: 'bold',
    fontSize: '1.8rem',
  };

  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 'auto' }}>
      <Box
        sx={{
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{ marginBottom: '0px' }}
          >
            {title}
          </Typography>
          <Typography variant="body2" component="div" sx={{ color: 'gray' }}>
            {formattedPercentage}%
          </Typography>
        </Box>

        <Typography variant="h5" component="div" sx={titleStyle}>
          {usageTexts[title as keyof typeof usageTexts]}
        </Typography>
      </Box>

      <Grid item xs={12}>
        <Progress data={(currentUsage / total) * 100}></Progress>
      </Grid>
    </Paper>
  );
}

export default function Statue() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <ResourceUsage title="Memory" currentUsage="5" total="8" />
      </Grid>
      <Grid item xs={12} md={4}>
        <ResourceUsage title="CPU" currentUsage="60" total="100" />
      </Grid>
      <Grid item xs={12} md={4}>
        <ResourceUsage title="Disk" currentUsage="20" total="60" />
      </Grid>
    </Grid>
  );
}
