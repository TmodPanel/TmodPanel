import * as React from 'react';
import { Box, Checkbox, Divider, Typography } from '@mui/material';
import Scrollbar from 'react-scrollbars-custom';

type Item = {
  name: string;
  checked: boolean;
};

const before: Item[] = [
  { name: '史莱姆王', checked: true },
  { name: '克苏鲁之眼', checked: true },
  { name: '世界吞噬怪', checked: false },
  { name: '蜂后', checked: false },
  { name: '骷髅王', checked: false },
  { name: '血肉之墙', checked: false },
  { name: '克苏鲁之脑', checked: false },
  { name: '独眼巨鹿', checked: false },
];

const after: Item[] = [
  { name: '史莱姆皇后', checked: true },
  { name: '双子魔眼', checked: true },
  { name: '毁灭者', checked: false },
  { name: '机械骷髅王', checked: false },
  { name: '世纪之花', checked: false },
  { name: '石巨人', checked: false },
  { name: '猪龙鱼公爵', checked: false },
  { name: '光之女皇', checked: false },
  { name: '拜月教邪教徒', checked: false },
  { name: '月亮领主', checked: false },
];

interface PageProps {
  data: Item[];
  label: string;
}

function Page(props: PageProps) {
  const title = (
    <Typography variant="body1" gutterBottom>
      {props.label === 'Before' ? 'Pre-Hardmode bosses' : 'Hardmode bosses'}
    </Typography>
  );

  return (
    <Box style={{ width: '100%', height: '100%' }}>
      {title}
      <Scrollbar style={{ width: '100%', height: '85%' }} permanentTrackY>
        {props.data.map((item: any, index: any) => (
          <div key={index}>
            <Checkbox checked={item.checked} color="success" />
            {item.name}
          </div>
        ))}
      </Scrollbar>
    </Box>
  );
}

export default function BossCheck() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',
        height: '470px',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Boss Check
      </Typography>
      <Divider sx={{ mb: '10px' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          borderRadius: '4px',
          height: '440px',
        }}
      >
        <Page data={before} label="Before" />
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{
            borderWidth: '1px',
            height: '90%',
          }}
        />
        <Page data={after} label="After" />
      </Box>
      <Divider sx={{ mb: '10px' }} />
    </Box>
  );
}