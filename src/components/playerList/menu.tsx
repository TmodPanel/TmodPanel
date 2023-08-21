import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ErrorIcon from '@mui/icons-material/Error';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { makeStyles } from '@mui/styles';
import { Alert, Theme } from '@mui/material';

import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: '#fff',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 2),
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
}));

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PlayerOption() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const anchor = Boolean(anchorEl);
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = (action: string) => {
    setState({ ...state, open: true });
    setAnchorEl(null);

    // 根据不同的选项执行不同的逻辑
    switch (action) {
      case 'kick':
        break;
      case 'ban':
        break;
      case 'unban':
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Snackbar
        open={state.open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <Button
        variant="contained"
        className={classes.button}
        id="fade-button"
        aria-controls={anchor ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchor ? 'true' : undefined}
        onClick={openMenu}
      >
        Action
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={anchor}
        onClose={() => {
          setAnchorEl(null);
        }}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => closeMenu('kick')}
          className={classes.menuItem}
        >
          <ExitToAppIcon />
          Kick
        </MenuItem>
        <MenuItem onClick={() => closeMenu('Ban')} className={classes.menuItem}>
          <ErrorIcon />
          Ban
        </MenuItem>
        <MenuItem
          onClick={() => closeMenu('Unban')}
          className={classes.menuItem}
        >
          <HowToRegIcon />
          Unban
        </MenuItem>
      </Menu>
    </div>
  );
}
