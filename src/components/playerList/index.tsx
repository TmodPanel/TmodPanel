import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GroupIcon from '@mui/icons-material/Group';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { useMemo, useState } from 'react';

type User = {
  id: string;
  ip: string;
  state: string;
  nickname: string;
  Instance: string;
  LastLogin: string;
  SigninDate: string;
  Action?: string;
};

function createData(
  id: string,
  LastLogin: string,
  SigninDate: string,
  ip: string,
  Instance: string,
  state: string,
  nickname: string,
  action?: string,
) {
  return { id, LastLogin, SigninDate, ip, Instance, state, nickname, action };
}


const rows = [
  createData(
    '1',
    '6/24/2023, 1:02 PM',
    '6/24/2023, 7:42 AM',
    '192.168.0.1',
    'instance1',
    'online',
    'sbsz',
  ),
];

const PlayerTable = () => {
  const [data, setData] = useState<User[]>(rows);

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 20,
        Cell(props) {
          let val = props.cell.getValue() as string;
          return (
            <>
              <Avatar
                sx={{ height: 24, width: 24, bgcolor: '#3f51b5' }}
                variant="rounded"
              >
                {val}
              </Avatar>
            </>
          );
        },
      },
      {
        accessorKey: 'nickname',
        header: 'Nickname',
        size: 150,
        Cell(props) {
          let val = props.cell.getValue() as string;
          return (
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {val}
            </Typography>
          );
        },
      },
      {
        accessorKey: 'Instance',
        header: 'Instance',
        size: 100,
        Cell(props) {
          let val = props.cell.getValue() as string;
          return <Typography variant="body1">{val}</Typography>;
        },
      },
      {
        accessorKey: 'ip',
        header: 'IP',
        size: 50,

        Cell(props) {
          let val = props.cell.getValue() as string;
          return <Typography variant="body1">{val}</Typography>;
        },
      },
      {
        accessorKey: 'LastLogin',
        header: 'Last Login',
        size: 200,
        Cell(props) {
          let val = props.cell.getValue() as string;
          return <Typography variant="body1">{val.split('T')[0]}</Typography>;
        },
      },
      {
        accessorKey: 'SigninDate',
        header: 'Signin Date',
        size: 200,
        Cell(props) {
          let val = props.cell.getValue() as string;
          return <Typography variant="body1">{val.split('T')[0]}</Typography>;
        },
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 50,

        Cell(props) {
          let val = props.cell.getValue() as string;
          return (
            <Button
              variant="contained"
              color={
                val === 'online'
                  ? 'success'
                  : val === 'offline'
                  ? 'warning'
                  : 'error'
              }
            >
              {val}
            </Button>
          );
        },
      },
      // {
      //   accessorKey: 'Action',
      //   header: 'Action',
      //   size: 50,
      //   Cell: (props) => {
      //     return (
      //       <div>
      //         <FadeMenu />
      //       </div>
      //     );
      //   },
      //   //end
      // },
    ],
    [],
  );


  return (
    <div>
      <MaterialReactTable
        data={data}
        columns={columns}
        initialState={{ density: 'spacious' }}
        muiTableBodyRowProps={({ row }) => ({})}
        enableRowSelection
        // renderTopToolbarCustomActions={(props) => {
        //   return (
        //     <div className={classes.container}>
        //       <GroupIcon />
        //       <Typography variant="subtitle1" sx={{ ml: 1 }}>
        //         {data.filter((row) => row.state === 'online').length}
        //         人在线
        //       </Typography>
        //     </div>
        //   );
        // }}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableSorting={false}
        enableBottomToolbar={true}
        enableTopToolbar={false}
      />
    </div>
  );
};
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  playerCount: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  actionButton: {
    marginLeft: theme.spacing(1),
  },
}));

function PlayerContent() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
          <div className={classes.container}>
            <div className={classes.playerCount}>
              <GroupIcon className={classes.icon} />
              <Typography>当前在线：2</Typography>
            </div>
            <Box className={classes.actions}>
              {renderActionButton(classes, "ban", "error", <BlockIcon />, "Ban")}
              {renderActionButton(classes, "mute", "warning", <CheckCircleOutlineIcon />, "UnBan")}
              {renderActionButton(classes, "kick", "info", <ExitToAppIcon />, "Kick")}
            </Box>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <PlayerTable />
      </Grid>
    </Grid>
  );
}


function renderActionButton(classes: any, key: string, color: any, icon: any, label: string) {
  return (
    <Button
      key={key}
      color={color}
      variant="contained"
      className={classes.actionButton}
      startIcon={icon}
    >
      {label}
    </Button>
  );
}



export default PlayerContent;
