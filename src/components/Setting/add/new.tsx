import { Box, Link, Paper, Typography } from '@mui/material';
import React from 'react';
import Scheme from './scheme';

export default function NewInstance() {
  return (
    <Paper>
      <Box sx={{ p: 2 }}>
        {/* 超链接 */}
        <Typography variant="h6" component="h2" gutterBottom>
          <Link
            href="https://terraria.wiki.gg/zh/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8#%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%96%87%E4%BB%B6"
            target="_blank"
            rel="noreferrer"
            underline="none"
            color="black"
          >
            详细内容请参考Wiki
          </Link>
        </Typography>
        {/* Scheme */}
        <Scheme />
        {/* 占位符*/}
      </Box>
    </Paper>
  );
}
