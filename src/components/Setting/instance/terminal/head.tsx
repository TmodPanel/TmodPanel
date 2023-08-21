import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import { Button, Divider, Paper, Theme } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

const makeStylesForTab = makeStyles((theme: Theme) => ({
  tab: {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      cursor: 'default',
      borderRadius: '10px 10px 10px 10px',
    },
    opacity: 1,
    width: '150px',
    minWidth: '150px',
    '&.Mui-selected': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '10px 10px 10px 10px',
    },
  },
  label: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textTransform: 'none',
    minWidth: '150px',
    maxWidth: '150px',
    '& .MuiTypography-root': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      marginLeft: '5px',
    },
  },
  closeIcon: {
    opacity: 0.5,
    marginRight: '10px',
    transition: 'opacity 0.3s ease-in-out', // 添加过渡效果
    '&:hover': {
      opacity: 1, // 修改hover时的样式
      // 设置周围的样式,增加周围的边框
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      boxShadow: '0 0 5px #ccc',
      boxSizing: 'border-box',
    },
  },
}));

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  return (
    <Box sx={{ width: '100%', flexGrow: 1 }}>
      <Paper style={{ padding: '10px' }} square={false} elevation={0}>
        <CustomTab />
      </Paper>
    </Box>
  );
}

const tabData = [
  { id: 0, name: 'One' },
];

const PanelData = [
  { id: 0, content: '第1个表格面板内容' },
];

const CustomTab = () => {
  const classes = makeStylesForTab();

  const [value, setValue] = React.useState(0);

  const [tabs, setTabs] = React.useState(tabData);

  const [panels, setPanels] = React.useState(PanelData);

  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTabClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    console.log('tab click');
  };

  const handleCloseTabClick = (id: number, event: React.SyntheticEvent) => {
    event.stopPropagation();
    console.log('icon click', id);

    const newTabs = tabs.filter((tab: any) => tab.id !== id);
    // 将newTabs 的 id 重新排序
    newTabs.forEach((tab: any, index: number) => {
      tab.id = index;
    });

    setTabs(newTabs);
    console.log('newTabs', newTabs);

    const newPanels = panels.filter((panel: any) => panel.id !== id);
    // 将newPanels 的 id 重新排序
    newPanels.forEach((panel: any, index: number) => {
      panel.id = index;
    });
    setPanels(newPanels);
    console.log('newPanels', newPanels);

    //如果删完了所有的tab,则将路由跳转到首页
    if (newTabs.length === 0) {
      navigate('/instances');
      return;
    }

    // 如果删除的是当前选中的tab,则将value设置id后一个tab的id
    if (value === id) {
      setValue(newTabs[newTabs.length - 1].id);
    }
  };

  const handleAddClick = () => {
    const newTab = {
      id: tabs.length,
      name: `New Tab ${tabs.length + 1}`,
    };
    setTabs([...tabs, newTab]);

    const newPanel = {
      id: panels.length,
      content: `第${panels.length + 1}个表格面板内容`,
    };
    setPanels([...panels, newPanel]);
  };

  const handleClosePageClick = () => {
    console.log('close click');
    navigate('/setting');
  };

  const Div = () => {
    if (value === tabs.length) return null;

    return <Divider orientation="vertical" variant="middle" flexItem />;
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
        variant="scrollable"
        // scrollButtons
        // allowScrollButtonsMobile
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
          [`& .${tabsClasses.indicator}`]: {
            backgroundColor: 'inherit',
          },
        }}
      >
        {tabs.map((table: any) => (
          <Tab
            key={table.id}
            className={classes.tab}
            label={
              <div className={classes.label}>
                <TerminalIcon
                  style={{ marginRight: '5px', marginLeft: '5px' }}
                  fontSize="medium"
                />

                <Typography variant="body1">{table.name}</Typography>
                <CloseIcon
                  className={classes.closeIcon}
                  fontSize="small"
                  onClick={(e) => handleCloseTabClick(table.id, e)}
                />
              </div>
            }
            onClick={handleTabClick}
            {...a11yProps(table.id)}
          />
        ))}
      </Tabs>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {Div()}
        <Button
          variant="text"
          style={{
            minWidth: '30px',
            height: '30px',
            marginLeft: '5px',
          }}
          color="inherit"
          onClick={handleAddClick}
        >
          <AddIcon fontSize="small" color="inherit" />
        </Button>

        <Button
          variant="text"
          style={{
            minWidth: '30px',
            height: '30px',
            marginLeft: '5px',
          }}
          color="inherit"
          onClick={handleClosePageClick}
        >
          <CloseIcon fontSize="medium" color="inherit" />
        </Button>
      </Box>
    </Box>
  );
};
