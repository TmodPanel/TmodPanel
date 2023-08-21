import { Button, Paper } from '@mui/material';
import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function NavigationBar() {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <label htmlFor="fileInput" style={{ marginRight: 10 }}>
          <Button
            variant="contained"
            startIcon={<CloudUploadIcon />}
            component="span"
          >
            Upload
          </Button>
        </label>
      </div>
    </Paper>
  );
}
