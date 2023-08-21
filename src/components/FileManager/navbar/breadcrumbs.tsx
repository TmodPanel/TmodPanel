import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, ButtonGroup, Grid, TextField, Theme } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';
import { useState } from 'react';
import MenuListComposition from './menu';

interface IPath {
  name: string;
  path: string;
}

interface IBreadcrumbProps {
  paths: IPath[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      separator: {
        color: theme.palette.text.primary,
        margin: theme.spacing(0, 0.5),
      },
    },
    fixedWidth: {
      maxWidth: '200px', // 设置最大宽度
      overflow: 'hidden', // 文本溢出隐藏
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  }),
);

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ paths }) => {
  const [dirs, setDirs] = useState<IPath[]>(paths); // 当前路径
  const classes = useStyles();
  // const pathLength = paths.length;
  const [isInputMode, setIsInputMode] = useState(false);
  const [isShowTabs, setIsShowTabs] = useState(false); // 是否显示tabs

  const handleParentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const isBreadcrumbsClicked = target.closest('.breadcrumbs');

    if (!isBreadcrumbsClicked) {
      setIsInputMode(true);
    }

    if (isShowTabs) {
      setIsInputMode(false);
    }

    console.log('isBreadcrumbsClicked', isBreadcrumbsClicked);
    console.log('isShowTabs', isShowTabs);
  };

  // 跳转path
  const handlePathClick = (path: string) => {
    console.log(path);
    setDirs((prev) => {
      const index = prev.findIndex((dir) => dir.path === path);
      return prev.slice(0, index + 1);
    });
  };

  return (
    <div className={classes.root}>
      <Box
        border={1}
        borderRadius={4}
        borderColor="grey.300"
        style={{ display: 'flex', alignItems: 'center' }}
        width="100%"
      >
        <ButtonGroup size="large">
          <Button variant="text">
            <ArrowBackIcon fontSize="small" />
          </Button>
          <Button variant="text">
            <ArrowForwardIcon fontSize="small" />
          </Button>
        </ButtonGroup>

        {/* 文本地址栏 */}
        {isInputMode ? (
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            style={{ width: '100%' }}
            autoFocus
            onBlur={() => setIsInputMode(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setIsInputMode(false);
              }
            }}
          />
        ) : (
          <Box
            borderLeft={1}
            borderRight={1}
            borderColor="grey.300"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            width="100%"
            onClick={handleParentClick}
          >
            <Breadcrumbs
              separator={
                <MenuListComposition
                  isShowTabs={isShowTabs}
                  setIsShowTabs={setIsShowTabs}
                />
              }
              aria-label="breadcrumb"
              key={paths[0].path}
              className="breadcrumbs"
            >
              {dirs.map((dir, index) => {
                return (
                  <Button
                    variant="text"
                    key={`${dir.path}-${index}`}
                    onClick={() => handlePathClick(dir.path)}
                  >
                    {dir.name}
                  </Button>
                );
              })}
            </Breadcrumbs>
          </Box>
        )}

        <ButtonGroup size="large">
          <Button variant="text">
            <ArrowDropDownIcon fontSize="small" />
          </Button>
          <Button variant="text">
            <RefreshIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </Box>

      <Grid item xs={12}></Grid>
    </div>
  );
};

export default Breadcrumb;
