import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Button, { ButtonProps } from '@mui/material/Button';
import { Box, ButtonGroup, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    error: {
      main: '#008394',
      contrastText: '#fff',
    },
    warning: {
      main: '#ffa733',
      contrastText: '#fff',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

interface IconButtonProps {
  color: string;
  startIcon: JSX.Element;
  label: string;
}

function IconButton(props: IconButtonProps) {
  const { color, startIcon, label } = props;
  let ButtonProps: ButtonProps;

  switch (color) {
    case 'success':
      ButtonProps = { color: 'success' };
      break;
    case 'secondary':
      ButtonProps = { color: 'secondary' };
      break;
    case 'neutral':
      ButtonProps = { color: 'neutral' };
      break;
    case 'warning':
      ButtonProps = { color: 'warning' };
      break;
    case 'error':
      ButtonProps = { color: 'error' };
      break;
    default:
      ButtonProps = { color: 'primary' };
      break;
  }

  return (
    <Button
      variant="contained"
      color={ButtonProps.color}
      startIcon={startIcon}
      style={{ margin: '0 5px', height: '40px' }}
      size="small"
    >
      {label}
    </Button>
  );
}

const ButtonGroupConfig = [
  { label: 'Upload', icon: <CloudUploadIcon />, color: 'success' },
  { label: 'hidden', icon: <VisibilityIcon />, color: 'secondary' },
  { label: 'rename', icon: <BorderColorIcon />, color: 'primary' },
  { label: 'new folder', icon: <CreateNewFolderIcon />, color: 'error' },
  { label: 'new file', icon: <NoteAddIcon />, color: 'error' },
  { label: 'copy', icon: <ContentCopyIcon />, color: 'warning' },
  { label: 'paste', icon: <ContentPasteIcon />, color: 'warning' },
  { label: 'zip', icon: <FolderZipIcon />, color: 'neutral' },
  { label: 'unzip', icon: <FolderOpenIcon />, color: 'neutral' },
];

export default function NavigationTools() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <ButtonGroup>
              <IconButton
                color={ButtonGroupConfig[0].color}
                startIcon={ButtonGroupConfig[0].icon}
                label={ButtonGroupConfig[0].label}
              />
              <IconButton
                color={ButtonGroupConfig[1].color}
                startIcon={ButtonGroupConfig[1].icon}
                label={ButtonGroupConfig[1].label}
              />
            </ButtonGroup>
            <ButtonGroup color="primary">
              {ButtonGroupConfig.slice(2).map((buttonConfig, index) => (
                <IconButton
                  key={index}
                  color={buttonConfig.color}
                  startIcon={buttonConfig.icon}
                  label={buttonConfig.label}
                />
              ))}
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
