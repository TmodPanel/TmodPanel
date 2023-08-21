import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const initialServer = {
  name: 'instance1',
  ip: '192.168.200.1',
  num: '16',
  seed: '3.3.2.1964603061',
  serverVersion: 'tModLoader v2022.6.96.4',
  clientVersion: 'Terraria Server v1.4.3.6',
  time: '8:03 PM',
  statue: 'running',
  port: '7777',
  map: '空岛生存',
  password: '123456',
};

const createField = (
  id: keyof typeof initialServer,
  label: string,
  defaultValue: string,
  readOnly: boolean,
) => ({
  id,
  label,
  defaultValue: initialServer[id] || defaultValue,
  readOnly,
});

const fields = [
  createField('name', 'Name', '', false),
  createField('ip', 'IP', '', true),
  createField('num', 'Num', '', false),
  createField('seed', 'Seed', '', true),
  createField('time', 'Time', '', true),
  createField('statue', 'Statue', '', true),
  createField('port', 'Port', '', false),
  createField('serverVersion', 'Server Version', '', true),
  createField('clientVersion', 'Client Version', '', true),
  createField('password', 'Password', '', false),
];

const maps = [
  { value: '空岛生存', label: '空岛生存' },
  { value: '空岛生存2', label: '空岛生存2' },
  { value: '空岛生存3', label: '空岛生存3' },
];

export default function BasicCard({ id }: { id: string }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const generateTextField = (field: any) => (
    <TextField
      id={field.id}
      label={field.label}
      defaultValue={field.defaultValue}
      variant="standard"
      InputProps={{
        readOnly: field.readOnly,
      }}
      style={{ width: '90%' }}
    />
  );

  const generatePasswordField = () => (
    <TextField
      label="Password"
      id="textField"
      variant="standard"
      type={showPassword ? 'text' : 'password'}
      defaultValue={initialServer.password}
      InputProps={{
        readOnly: false,
        endAdornment: (
          <InputAdornment position="end" id="textField3">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      style={{ width: '45%' }}
    />
  );

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }}}
      noValidate
      autoComplete="off"
      
    >
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <Grid container spacing={1}>
        {fields.slice(0, fields.length - 1).map((field) => (
          <Grid item xs={6} key={field.id}>
            {generateTextField(field)}
          </Grid>
        ))}

        <Grid item xs={6}>
          <TextField
            id="standard-select"
            select
            label="Map"
            defaultValue={initialServer.map}
            variant="standard"
            style={{ width: '90%' }}
          >
            {maps.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Box style={{ position: 'relative' }}>
        {generatePasswordField()}

        <Button
          variant="contained"
          color="primary"
          sx={{ position: 'absolute', bottom: '10', right: '5' }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
