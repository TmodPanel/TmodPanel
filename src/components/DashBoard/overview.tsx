import {
  Card,
  CardContent,
  Chip,
  Grid,
  Theme,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import MemoryIcon from '@mui/icons-material/Memory';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ComputerIcon from '@mui/icons-material/Computer';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { makeStyles } from '@mui/styles';

const defaultServerStatus = {
  platform: 'ubuntu',
  onlineUsers: 12,
  runningTime: '2023/7/1 10:10:10',
  arch: 'x86_64',
  hostname: 'localhost',
  port: 25565,
  ip: '192.168.0.1',
  PanerlVersion: '1.0.0',
  uptime: 234,
};

export interface Props {
  platform: string; // 平台
  onlineUsers: number; // 在线人数
  runningTime: string; // 服务器启动时间
  arch: string; // 服务器架构
  hostname: string; // 服务器主机名
  port: number; // 服务器端口号
  ip: string; // ip地址
  PanerlVersion: string; // Panerl版本
  uptime: number; // 服务器已经运行的时间
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    borderRadius: '10px',
    transition: 'all 0.3s',
    backgroundColor: '#ffffff',
    '&:hover': {
      transform: 'translateY(-1%)',
      transformOrigin: 'bottom center',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.15)',
      backgroundColor: '#f0f0f0',
    },
  },
}));

const StatusCard = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: JSX.Element;
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              textTransform: 'none',
              justifyContent: 'flex-start',
              marginBottom: '8px',
            }}
          >
            {icon}
            <Typography variant="body1" style={{ marginLeft: '8px' }}>
              {label}
            </Typography>
          </div>
          <Typography variant="h6" gutterBottom>
            <Chip label={value} color="primary" variant="outlined" />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Overview = () => {
  const [serverStatus, setServerStatus] = useState<Props>(defaultServerStatus);
  const statusFields = [
  
    {
      label: 'Platform',
      value: serverStatus.platform,
      icon: <ComputerIcon />,
    },
    {
      label: 'Arch',
      value: serverStatus.arch,
      icon: <MemoryIcon />,
    },

    {
      label: 'Hostname',
      value: serverStatus.hostname,
      icon: <PublicIcon />,
    },
    {
      label: 'Port',
      value: serverStatus.port,
      icon: <SettingsEthernetIcon />,
    },
    {
      label: 'Panerl Version',
      value: serverStatus.PanerlVersion,
      icon: <DashboardIcon />,
    },
    {
      label: 'Online Users',
      value: serverStatus.onlineUsers,
      icon: <GroupIcon />,
    },
    {
      label: 'Running Time',
      value: serverStatus.runningTime,
      icon: <AccessTimeIcon />,
    },
    {
      label: 'Uptime',
      value: `${serverStatus.uptime} hours`,
      icon: <ScheduleIcon />,
    },
  ];

  return (
    <Grid container spacing={1}>
      {statusFields.map((field) => (
        <StatusCard
          key={field.label}
          label={field.label}
          value={field.value}
          icon={field.icon}
        />
      ))}
    </Grid>
  );
};
export default Overview;
