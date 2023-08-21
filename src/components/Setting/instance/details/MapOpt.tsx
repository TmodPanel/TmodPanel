import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import { Alert, Theme } from '@mui/material';

import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: '#fff',
    borderRadius: theme.spacing(1),
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

export default function MapOption() {
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
  const closeMeun = () => {
    setState({ ...state, open: true });
    setAnchorEl(null);
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
        size="small"
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
        <MenuItem onClick={closeMeun} className={classes.menuItem}>
          <DeleteIcon />
          Delete
        </MenuItem>
        <MenuItem onClick={closeMeun} className={classes.menuItem}>
          <CloudDownloadIcon />
          Download
        </MenuItem>
      </Menu>
    </div>
  );
}
