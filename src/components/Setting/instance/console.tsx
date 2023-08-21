import { Grid, Paper } from '@mui/material';
import BasicCard from './BasicCard';
import Actions from './action';
import Details from './details/details';
import BossCheck from './boss';
import { useParams } from 'react-router-dom';

export default function InstanceConsole() {
  let { id } = useParams(); // 获取路由参数中的 id
  id = id ? id : '1'; // 如果 id 不存在，则默认为 1
  return (
    <Grid container spacing={3}>
      {/* Instance action group */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Actions id={id} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 'auto' }}>
          <BossCheck />
        </Paper>
      </Grid>

      {/* Basic info card */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <BasicCard id={id} /> {/* 使用 id 作为 prop 传递给子组件 */}
        </Paper>
      </Grid>

      {/* Instance details */}
      <Grid item xs={12}>
        <Details id={id} /> {/* 使用 id 作为 prop 传递给子组件 */}
      </Grid>
    </Grid>
  );
}
