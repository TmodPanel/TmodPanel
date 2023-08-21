import { IconButton, Button, Paper, InputBase, Theme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 600,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  searchButton: {
    padding: 10,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    transition: 'all 0.2s ease-in-out',
    transform: 'scale(1)',
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Paper
      component="form"
      className={classes.root}
      style={{
        width: isHovering ? 600 : 500,
        transition: 'width 0.3s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase className={classes.input} placeholder="Search Mods" />
      <Button
        className={classes.searchButton}
        aria-label="search"
        variant="contained"
        style={{ backgroundColor: '#3f51b5' }}
      >
        Search
      </Button>
    </Paper>
  );
}
