import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export interface ComboBoxProps {
  options: string[];
  label: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export default function ComboBox(props: ComboBoxProps) {
  return (
    <Autocomplete
      style={props.style}
      disablePortal
      sx={{ width: 300 }}
      options={props.options}
      renderInput={(params) => <TextField {...params} label={props.label} />}
      disabled={props.disabled}
    />
  );
}
