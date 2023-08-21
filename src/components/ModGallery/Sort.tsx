import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SortIcon from '@mui/icons-material/Sort';

export default function SortBar() {
  const options = [
    { label: 'File Size', value: 'File Size', width: '150px' },
    { label: 'Popular', value: 'Most Popular', width: '150px' },
    { label: 'Recent', value: 'Most Recent', width: '150px' },
    { label: 'Downloads', value: 'Most Downloads', width: '200px' },
  ];

  const [activeButton, setActiveButton] = useState('');

  return (
    <div>
      {/* sort by */}
      <Button
        variant="text"
        style={{ margin: '0 5px', height: '40px' }}
        startIcon={<SortIcon />}
      >
        Sort By
      </Button>
      {options.map((option) => (
        <Button
          key={option.value}
          variant={activeButton === option.value ? 'contained' : 'outlined'}
          onClick={() => setActiveButton(option.value)}
          style={{
            margin: '0 5px',
            display: 'inline-block',
            width: option.width,
            height: '40px',
          }}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
