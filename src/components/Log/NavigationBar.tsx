import { Paper } from '@mui/material';
import { styled } from '@mui/styles';
import SelectInput from './select';
import SetSize from './SetSize';

const SelectContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: '2px solid rgba(0, 0, 0, 0.1)',
  borderRadius: 8,
  transition: 'all 0.3s ease-in-out',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',

  '&:hover': {
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
}));

interface Props {
  size: string;
  setSize: (size: string) => void;
}

export default function NavigationBar({ size, setSize }: Props) {
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
        <SetSize setSize={setSize} />
      <SelectContainer>
        <SelectInput />
      </SelectContainer>
    </Paper>
  );
}
