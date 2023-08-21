import { Typography, Switch, Box, Paper } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import ModOption from './ModOpt';

type Mod = {
  name: string;
  version: string;
  statue: string;
  size: string;
  Active: boolean;
  authur?: string;
};

const mod: Mod[] = [
  {
    name: 'Forge',
    version: '6.2.2',
    statue: 'true',
    size: '64 KB',
    Active: true,
    authur: 'LexManos',
  },
  {
    name: 'Fabric',
    version: '1.16',
    statue: 'false',
    size: '64 KB',
    Active: false,
    authur: 'Archer',
  },
];

const typographyCell = (props: any) => {
  let val = props.cell.getValue() as string;

  if (props.column.id === 'name') {
    return (
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {val}
      </Typography>
    );
  }

  if (props.column.id === 'version') {
    return <Typography variant="subtitle1">{val}</Typography>;
  }

  if (props.column.id === 'statue') {
    if (val === 'true') {
      return (
        <Typography variant="subtitle1" sx={{ color: 'success.main' }}>
          已启用
        </Typography>
      );
    } else {
      return (
        <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
          未启用
        </Typography>
      );
    }
  }
  return <Typography variant="body1">{val}</Typography>;
};

const StatusCell = (props: any) => {
  const val = props.cell.getValue() === 'true' ? '已启用' : '未启用';
  const color =
    props.cell.getValue() === 'true' ? '#4caf50' : 'rgb(102, 116, 139)';

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Paper
        elevation={3}
        style={{
          backgroundColor: color,
          margin: '2px',
          padding: '5px',
        }}
      >
        <Box color="white">{val}</Box>
      </Paper>
    </Box>
  );
};

export default function ModList() {const modColumns = useMemo<MRT_ColumnDef<Mod>[]>(
  () => [
    {
      accessorKey: 'name',
      header: 'Mod名称',
      size: 100, // Adjusted size
      Cell: typographyCell,
    },
    {
      accessorKey: 'version',
      header: 'Mod版本',
      size: 100, // Adjusted size
      Cell: typographyCell,
    },
    {
      accessorKey: 'authur',
      header: '作者',
      size: 100, // Adjusted size
      Cell: typographyCell,
    },
    {
      accessorKey: 'statue',
      header: '状态',
      size: 100, // Adjusted size
      Cell: StatusCell,
    },
    {
      accessorKey: 'size',
      header: '大小',
      size: 100, // Adjusted size
      Cell: typographyCell,
    },
    {
      header: 'Operation',
      size: 100, // Adjusted size
      Cell: (props) => {
        return <ModOption />;
      },
    },
    {
      accessorKey: 'Active',
      header: 'Active',
      size: 100, // Adjusted size
      Cell(props) {
        let val = props.cell.getValue() as boolean;
        const handleChange = () => {
          val = !val;
        };
        return (
          <div>
            <Switch
              checked={val}
              defaultChecked
              color="success"
              onChange={handleChange}
            />
          </div>
        );
      },
    },
  ],
  [],
);

  return (
    <MaterialReactTable
      data={mod}
      columns={modColumns}
      enableColumnActions={false}
      enableColumnFilters={false}
      enableSorting={false}
      enableBottomToolbar={true}
      enableTopToolbar={false}
      columnResizeMode="onEnd"
    />
  );
}
