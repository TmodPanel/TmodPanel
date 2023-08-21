import {
  Typography,
  Tooltip,
  createTheme,
  ThemeProvider,
  Chip,
  Box,
  Paper,
} from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import MapOption from './MapOpt';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: 'rgb(146, 111, 217)',
    },
    secondary: {
      // 188, 87, 138
      main: 'rgb(188, 87, 138)',
    },
    info: {
      main: 'rgb(197, 88, 88)',
    },
  },
});
type Map = {
  id: Number;
  name: string;
  seed: string;
  WorldSize: string;
  GameMode: string;
  size: string;
  statue: Number;
  action?: string;
};

const map: Map[] = [
  {
    id: 1,
    name: 'Forge',
    seed: '1069462687',
    WorldSize: 'Lager',
    GameMode: 'journey/Corruption',
    size: '6 MB',
    statue: 1,
  },
  {
    id: 2,
    name: 'Fabric',
    seed: '1069462687',
    WorldSize: 'Small',
    GameMode: 'classic/Crimson',
    size: '6 MB',
    statue: 4,
  },
  {
    id: 3,
    name: 'mirage',
    seed: '1069462687',
    WorldSize: 'Small',
    GameMode: 'expert/Corruption',
    size: '6 MB',
    statue: 4,
  },
  {
    id: 4,
    name: 'inferno',
    seed: '1069462687',
    WorldSize: 'Small',
    GameMode: 'Master/Crimson',
    size: '6 MB',
    statue: 4,
  },
];

type StatusMappingType = {
  [key: number]: {
    label: string;
    tooltip: string;
  };
};

const StatusCell = ({ value }: { value: number }) => {
  const statusMapping: StatusMappingType = {
    0: { label: '未使用', tooltip: '未启用' },
    1: { label: '正在使用中', tooltip: '已启用' },
    // 增加更多状态，如2, 3, 4...
  };

  const { label, tooltip } = statusMapping[value] || statusMapping[0];

  if (value === 1) {
    return (
      <Tooltip title={tooltip}>
        <Chip label={label} size="medium" color="success" />
      </Tooltip>
    );
  }

  return <></>;
};

const typographyCell = (props: any) => {
  let val = props.cell.getValue() as string;

  if (props.column.id === 'name') {
    return (
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {val}
      </Typography>
    );
  }

  if (props.column.id === 'WorldSize') {
    return <Typography variant="subtitle1">{val}</Typography>;
  }

  if (props.column.id === 'GameMode') {
    const gameModeSplit = val.split('/');
    return (
      <Box sx={{ display: 'inline' }}>
        <Typography variant="subtitle2" fontStyle="italic">
          {gameModeSplit[0]}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mx: 1, display: 'inline', color: 'textSecondary' }}
        >
          /
        </Typography>
        <Typography variant="subtitle2" fontStyle="italic">
          {gameModeSplit[1]}
        </Typography>
      </Box>
    );
  }

  // Default formatting
  return <Typography variant="body1">{val}</Typography>;
};

type ColorName =
  | 'journey'
  | 'classic'
  | 'expert'
  | 'Master'
  | 'Corruption'
  | 'Crimson';

const colorMap: Record<ColorName, string> = {
  journey: '#f44336', // Red for journey
  classic: '#3f51b5', // Blue for classic
  expert: '#ff9800', // Orange for expert
  Master: '#e91e63', // Pink for Master
  Corruption: '#4caf50', // Green for Corruption
  Crimson: '#9c27b0', // Purple for Crimson
};

const gameModeCell = (props: any) => {
  let val = props.cell.getValue() as string;
  let [mode, terrain] = val.split('/') as [ColorName, ColorName];

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Paper
          elevation={3}
          style={{
            backgroundColor: colorMap[mode] || '#000',
            margin: '2px',
            padding: '5px',
          }}
        >
          <Box
            fontWeight=""
            color={theme.palette.getContrastText(colorMap[mode] || '#000')}
          >
            {mode}
          </Box>
        </Paper>
        <Paper
          elevation={3}
          style={{
            backgroundColor: colorMap[terrain] || '#000',
            margin: '2px',
            padding: '5px',
          }}
        >
          <Box
            fontWeight=""
            color={theme.palette.getContrastText(colorMap[terrain] || '#000')}
          >
            {terrain}
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default function MapList() {
  const mapColumns = useMemo<MRT_ColumnDef<Map>[]>(() => {
    return [
      {
        accessorKey: 'name',
        header: '地图名称',
        size: 100, // Adjusted size
        Cell: typographyCell,
      },
      {
        accessorKey: 'seed',
        header: '种子',
        size: 50,
        Cell: typographyCell,
      },
      {
        accessorKey: 'WorldSize',
        header: '世界大小',
        size: 100, // Adjusted size
        Cell: typographyCell,
      },
      {
        accessorKey: 'GameMode',
        header: '游戏模式',
        size: 100, // Adjusted size
        Cell: gameModeCell,
      },
      {
        accessorKey: 'size',
        header: '大小',
        size: 100, // Adjusted size
        Cell: typographyCell,
      },
      {
        accessorKey: 'action',
        header: 'Operation',
        size: 100, // Adjusted size
        Cell: (props) => <MapOption />,
      },
      {
        accessorKey: 'statue',
        header: '状态',
        size: 50,
        Cell: (props) => {
          let val = props.cell.getValue() as number;
          return <StatusCell value={val} />;
        },
      },
    ];
  }, []);

  return (
    <MaterialReactTable
      data={map}
      columns={mapColumns}
      enableColumnActions={false}
      enableColumnFilters={false}
      enableSorting={false}
      enableBottomToolbar={true}
      enableTopToolbar={false}
    />
  );
}
