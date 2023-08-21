import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxBody(props: React.PropsWithChildren<{}>) {
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      {props.children}
    </Box>
  );
}
