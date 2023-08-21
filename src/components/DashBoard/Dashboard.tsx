import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Statue from './Statue';
import Overview from './overview';
import ResoureChart from './ResoureChart';

const mdTheme = createTheme();

function DashboardContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={3}>
          {/* server overview */}
          <Grid item xs={12}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'transparent',
              }}
              elevation={0}
            >
              <Overview />
            </Paper>
          </Grid>

          <Grid item xs={12}>
              <Statue />
          </Grid>
          {/* Server Monitor */}
          {/* <Grid item xs={12} md={4} lg={3}>
            <Box
              sx={{
                height: 385,
              }}
            >
              <InstanceMonitor />
            </Box>
          </Grid> */}
          {/* <Grid item xs={12} md={8} lg={9}>
            <Box
              sx={{
                flexDirection: 'column',
                height: 385,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Statue />
            </Box>
          </Grid> */}

          {/* Chart */}
          <Grid item xs={12}>
            <ResoureChart />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
