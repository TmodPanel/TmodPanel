import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export interface InputSliderProps {
  value: number;
  onChange?: (event: Event, newValue: number | number[]) => void;
  label: string;
  min: number;
  max: number;
  style?: React.CSSProperties;
}

function InputSlider(props: InputSliderProps) {
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(props.value);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {};

  return (
    <div>
      <Box sx={{ width: 250 }} style={props.style}>
        <Typography id="input-slider" gutterBottom>
          {props.label}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              min={props.min}
              max={props.max}
            />
          </Grid>
          <Grid item>
            <Input
              style={{ width: 60 }}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: props.min,
                max: props.max,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default InputSlider;
