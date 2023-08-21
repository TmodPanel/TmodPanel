import FolderIcon from '@mui/icons-material/Folder';
import { Box, InputBase, MenuItem, Select } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { useState } from 'react';

const FileSelector = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const FolderIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from FolderIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
    },
  },
}));

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const SelectInput = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <FileSelector>
        <FolderIconWrapper>
          <FolderIcon />
        </FolderIconWrapper>
        <Select
          value={selectedOption}
          onChange={handleChange}
          displayEmpty
          input={<StyledInputBase />}
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FileSelector>
    </Box>
  );
};

export default SelectInput;
