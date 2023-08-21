import { ThemeProvider, createTheme, Button } from '@mui/material';
import React from 'react';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useNavigate, useLocation } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
  },
  typography: {
    h6: {
      fontSize: '18px',
    },
  },
});

export default function TerminalCard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenTerminal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const terminalPath = `/instances/terminal`;
    console.log(terminalPath)
    if (event.ctrlKey || event.metaKey) {
      window.open(terminalPath, '_blank');
    } else {
      navigate(terminalPath);
      window.location.reload();
    }
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <a
        href={`${location.pathname}/terminal`}
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration:'none'}}
      >
        <Button
          variant="contained"
          startIcon={<TerminalIcon />}
          onClick={handleOpenTerminal}
        >
          Open Terminal
        </Button>
      </a>
    </ThemeProvider>
  );
}
