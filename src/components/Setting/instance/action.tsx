import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TerminalCard from './terminal/TerminalCard';

const buttons = [
  {
    label: 'Reboot',
    icon: <RestartAltIcon />,
    color: 'success',
  },
  {
    label: 'Shutdown',
    icon: <StopIcon />,
    color: 'error',
  },
  {
    label: 'Boot',
    icon: <PlayArrowIcon />,
    color: 'info',
  },
];

export default function Actions({ id }: { id: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',
        height: 'auto',
      }}
    >
      <Typography variant="h6">Actions</Typography>

      <Box>
        {buttons.map((button) => (
          <Button
            key={button.label}
            variant="contained"
            startIcon={button.icon}
            sx={{
              borderRadius: '4px',
              textTransform: 'none',
              fontSize: '14px',
              marginRight: '10px',
            }}
            color={button.color as any}
          >
            {button.label}
          </Button>
        ))}
        <TerminalCard />
      </Box>
    </Box>
  );
}
