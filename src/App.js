import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import NavBar from './components/shared/NavBar';
import Toolbar from '@material-ui/core/Toolbar';
import Main from './components/Main';
import { useMediaQuery } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const [drawerOpen, setDrawerState] = React.useState(true);

  const openDrawer = () => {
    setDrawerState(true);
  }

  const closeDrawer = () => {
    setDrawerState(false);
  }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const menuItemClicked = () => {
    setDrawerState(!isSmallScreen)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar openHandler={openDrawer}/>
      <Main />
    </div>
  );
}

export default App;
