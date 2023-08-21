import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

interface Props {
  setSize: (size: string) => void;
}

export default function SetSize({ setSize }: Props) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => setSize(e.target.value)}
      >
        <FormControlLabel value="500px" control={<Radio />} label="Small" />
        <FormControlLabel value="700px" control={<Radio />} label="Middle" />
        <FormControlLabel value="900px" control={<Radio />} label="Large" />
      </RadioGroup>
    </FormControl>
  );
}
