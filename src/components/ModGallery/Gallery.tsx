import { Grid, Pagination } from '@mui/material';
import ModCard from './modCard';
import { Box } from '@mui/system';
import React from 'react';

function Gallery() {
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const [page, setPage] = React.useState(1);


  return (
    <div style={{ maxHeight: '900px', margin: '0 auto' }}>
      <Box sx={{ flexGrow: 1 }} maxHeight="800px" margin="0 auto">
        <Grid container spacing={3}>
          {[...Array(8)].map((_, index) => (
            <Grid key={index} item xs={3}>
              <ModCard />
            </Grid>
          ))}
        </Grid>

        <Box display="flex" justifyContent="center" mt={3}>
          <Pagination
            count={10}
            color="primary"
            onChange={handlePageChange}
            page={page}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Gallery;
