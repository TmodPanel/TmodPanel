import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { File } from './Item';

import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Box, Paper, Tooltip, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useMemo } from 'react';

interface FileListProps {
  files: File[];
  onFileClick?: (id: string) => void;
  onFileDelete?: (id: string) => void;
}

const NameCell = (props: any) => {
  let icon;
  let val = props.cell.getValue() as React.ReactNode;
  let type = props.row.getValue('type') as string;

  switch (type) {
    case 'Folder':
      icon = <FolderIcon sx={{ fontSize: '1.25rem', color: 'primary.main' }} />;
      break;
    case 'File':
      icon = (
        <InsertDriveFileIcon
          sx={{ fontSize: '1.25rem', color: 'primary.info' }}
        />
      );
      break;
    default:
      icon = (
        <InsertDriveFileIcon
          sx={{ fontSize: '1.25rem', color: 'primary.info' }}
        />
      );
      break;
  }

  const cellContent = (
    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {icon}
      <Typography variant="body1">{val}</Typography>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', gap: '1rem', userSelect: 'text' }}>
      <Paper
        variant="outlined"
        onClick={props.handleFileClick}
        sx={{
          userSelect: 'text', // Allow text selection
          '& span': {
            userSelect: 'none', // Prevent icon selection
          },
          padding: '6px 16px', // this to mimic button padding
          cursor: 'pointer', // to change the mouse cursor when hovering over the Paper
        }}
      >
        {cellContent}
      </Paper>
    </Box>
  );
};

const ActionCell = (props: any) => {
  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Tooltip title="Download">
        <Button color="primary" variant="contained" size="small">
          <DownloadIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Delete">
        <Button
          color="error"
          variant="contained"
          size="small"
          onClick={() =>
            props.handleFileDelete(props.row.getValue('name') as string)
          }
        >
          <DeleteIcon />
        </Button>
      </Tooltip>
    </Box>
  );
};

function FileList(props: FileListProps) {
  const handleFileClick = (Name: string, type: string) => {
    if (type === 'Folder') {
      props.onFileClick?.(Name);
    }
  };

  // const handleFileDelete = (id: string) => {
  //   props.onFileDelete?.(id);
  // };

  const columns = useMemo<MRT_ColumnDef<File>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        size: 500,
        Cell: (props: any) => (
          <NameCell
            cell={props.cell}
            row={props.row}
            handleFileClick={() =>
              handleFileClick(
                props.row.getValue('name') as string,
                props.row.getValue('type') as string,
              )
            }
          />
        ),
      },
      {
        accessorKey: 'type',
        header: 'Type',
        size: 100,
      },
      {
        accessorKey: 'size',
        header: 'Size',
        size: 100,
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 50,
      },
      {
        accessorKey: 'action',
        header: 'Action',
        Cell: ActionCell,
      },
    ],
    [],
  );

  return (
    <MaterialReactTable
      data={props.files}
      columns={columns}
      enableColumnActions={false}
      enableColumnFilters={false}
      enableSorting={false}
      enableBottomToolbar={true}
      enableTopToolbar={false}
    />
  );
}

export default FileList;
