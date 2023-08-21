import { Paper } from '@mui/material';
import BasicBreadcrumbs from './breadcrumbs';
import Tools from './tools';
import { useEffect } from 'react';
import axios from 'axios';

interface Iprops {
  //hidden: boolean;
  //path: string[];
  //setHidden: (hidden: boolean) => void;
}

var data = JSON.stringify({
  "path": "C:\\project\\Project_Go\\sbsz_project\\TSM-Server"
});


var config = {
  method: 'post',
  url: 'http://127.0.0.1:9000/api/v1/file/list',
  headers: {
    'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)',
    'Content-Type': 'application/json',
  },
  data: data,
};

function NavigationBar(props: Iprops) {
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const paths = [
    { name: 'C:', path: 'C:/' },
    { name: 'Users', path: 'C:/Users/' },
    { name: 'Acher', path: 'C:/Users/Acher/' },
    { name: 'Documents', path: 'C:/Users/Acher/Documents/' },
    { name: 'Tencent Files', path: 'C:/Users/Acher/Documents/Tencent Files/' },
    {
      name: '2237423438',
      path: 'C:/Users/Acher/Documents/Tencent Files/2237423438/',
    },
    {
      name: 'FileRecv',
      path: 'C:/Users/Acher/Documents/Tencent Files/2237423438/FileRecv/',
    },
    // {
    //   name: 'images',
    //   path: 'C:/Users/Acher/Documents/Tencent Files/2237423438/FileRecv/images/',
    // },
    // {
    //   name: '2021-10-01',
    //   path: 'C:/Users/Acher/Documents/Tencent Files/2237423438/FileRecv/images/2021-10-01/',
    // }
  ];

  return (
    <div>
      <Paper elevation={1}>
        <BasicBreadcrumbs paths={paths} />
        <div style={{ padding: '10px' }}>
          <Tools />
        </div>
      </Paper>
    </div>
  );
}

export default NavigationBar;
