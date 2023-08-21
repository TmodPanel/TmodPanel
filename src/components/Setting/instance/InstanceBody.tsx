import { Grid, Paper } from '@mui/material';
import InstanceCard, { AddCard } from './InstanceCard';

const data = [
  {
    id: 1,
    name: 'My Instance',
    serverVersion: 'v 1.0.0',
    uptime: '1 hour',
    startedAt: '2021-10-10 10:10:10',
    status: 'Running',
    memory: '100M',
  },
  {
    id: 2,
    name: 'test instance 1',
    serverVersion: 'v 1.0.0',
    uptime: '1 hour',
    startedAt: '2023-6-10 10:10:10',
    status: 'Stopped',
    memory: '256M',
  },
  {
    id: 3,
    name: 'test instance 2',
    serverVersion: 'v 1.0.0',
    uptime: '1 hour',
    startedAt: '2023-6-10 10:10:10',
    status: 'Stopped',
    memory: '256M',
  },
  {
    id: 4,
    name: 'test instance 3',
    serverVersion: 'v 1.0.0',
    uptime: '1 hour',
    startedAt: '2023-6-10 10:10:10',
    status: 'Stopped',
    memory: '256M',
  },
  {
    id: 5,
    name: 'test instance 4',
    serverVersion: 'v 1.0.0',
    uptime: '1 hour',
    startedAt: '2023-6-10 10:10:10',
    status: 'Stopped',
    memory: '256M',
  },
];

export default function InstanceBody() {
  const cards = data.map((item, Index) => (
    <InstanceCard
      id={item.id}
      name={item.name}
      serverVersion={item.serverVersion}
      uptime={item.uptime}
      startedAt={item.startedAt}
      status={item.status}
      memory={item.memory}
      key={Index}
    />
  ));

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper elevation={3}>{card}</Paper>
        </Grid>
      ))}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3}>
          <Grid sx={{ height: '100%' }}>
            <AddCard />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
