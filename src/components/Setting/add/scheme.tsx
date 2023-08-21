import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ComboBox, { ComboBoxProps } from './Combox';
import InputSlider, { InputSliderProps } from './slider';

export interface TrConf {
  id: string;
  name: string;
  maxnum: string;
  password: string;
  port: string;
  map: string;
  language: string;
  motd: string;
  priority: number;
  ip: string;
  npcstream: number;
  secure: boolean;
  banlist: boolean;
  upnp: boolean;
  steam: boolean;
  lobby: boolean;
}

const textField = [
  { name: 'instance name', label: 'Instance Name' },
  { name: 'password', label: 'Password' },
  { name: 'motd', label: 'MOTD' },
  { name: 'worldname', label: 'World Name' },
  //{ name: 'ip', label: 'IP' },
];

const checkbox = [
  { name: 'secure', label: 'Secure' },
  { name: 'banlist', label: 'Ban List' },
  { name: 'upnp', label: 'UPnP' },
  { name: 'steam', label: 'Steam' },
  { name: 'lobby', label: 'Lobby' },
];

const initialValue: TrConf = {
  id: '1',
  name: '配置方案一',
  maxnum: '16',
  password: 'sbsz',
  port: '7777',
  map: '空岛生存带师',
  language: 'zh-Hans',
  motd: 'welcome to Terraria',
  priority: 1,
  ip: '',
  npcstream: 0,
  banlist: false,
  secure: false,
  upnp: false,
  steam: false,
  lobby: false,
};

function Scheme() {
  const [check, setCheck] = React.useState(true);

  const [formData, setFormData] = React.useState(initialValue);

  // InputSliderProps
  const inputSlider: InputSliderProps[] = [
    { label: 'maxnum', min: 1, max: 16, value: 8 },
    { label: 'port', min: 1, max: 65535, value: 7777 },
    { label: 'priority', min: 1, max: 10, value: 1 },
    { label: 'npcstream', min: 1, max: 10, value: 1 },
  ];

  const comboBoxs: ComboBoxProps[] = [
    {
      label: 'map',
      options: ['空岛生存', '空岛生存带师', '空岛生存带师2'],
      disabled: !check,
    },
    { label: 'Size', options: ['small', 'media', 'lager'], disabled: check },
    {
      label: 'Mode',
      options: ['classic', 'expert', 'master', 'journey'],
      disabled: check,
    },
  ];

  //const autocreate: ComboBoxProps[] = [];

  const handleChange = (event: any) => {
    const { name, value, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: event.target.type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // do something with the form data, e.g. submit to a server
  };

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
  };

  const navigate = useNavigate();

  const onClick = () => {
    const instancePath = `/instances`;
    navigate(instancePath);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {textField.map((item) => (
            <TextField
              style={{ marginBottom: 15, width: '80%' }}
              key={item.name}
              name={item.name}
              label={item.label}
              onChange={handleChange}
              variant="standard"
              // focused
            />
          ))}

          <ComboBox
            label="Language"
            options={['zh-Hans', 'zh-Hant', 'en-US']}
            style={{ marginBottom: 15, width: '80%' }}
          />
        </Grid>
        <Grid item xs={4}>
          {/* 现有地图或创建新地图 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" style={{ marginRight: 10 }}>
              Creates a new world
            </Typography>

            <Switch checked={check} onChange={handleCheckChange} />
          </Box>

          {comboBoxs.map((item) => (
            <ComboBox
              key={item.label}
              label={item.label}
              options={item.options}
              style={{
                marginBottom: 15,
                width: '80%',
              }}
              disabled={item.disabled}
            />
          ))}
        </Grid>
        <Grid item xs>
          {inputSlider.map((item) => (
            <InputSlider
              key={item.label}
              label={item.label}
              min={item.min}
              max={item.max}
              value={item.value}
              style={{ marginBottom: 10, marginLeft: 10 }}
            />
          ))}
        </Grid>
        <Grid item justifyContent="space-between" container>
          <Grid item>
            {checkbox.map((item) => (
              <FormControlLabel
                key={item.name}
                control={
                  <Checkbox
                    checked={formData[item.name as keyof TrConf] as boolean}
                    onChange={handleChange}
                    name={item.name}
                  />
                }
                label={item.label}
              />
            ))}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ marginTop: 10 }}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button
              variant="contained"
              style={{ marginTop: 10, marginLeft: 10 }}
              color="error"
              onClick={onClick}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Scheme;
