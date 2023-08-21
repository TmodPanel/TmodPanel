import React from 'react';
import SearchBar from './search';
import { Paper } from '@mui/material';
import SortBar from './Sort';

export default function NavigationBar() {
  return (
    <div>
      <Paper elevation={3} style={{ padding: '10px' }}>
        {/* SearchBar 居中*/}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SearchBar />
        </div>
        <SortBar />
      </Paper>
    </div>
  );
}
