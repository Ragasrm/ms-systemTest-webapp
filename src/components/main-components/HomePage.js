import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NavBar from "../shared/NavBar";
import Main from "../Main";
import { useMediaQuery } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function HomePage() {
  const classes = useStyles();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerState] = React.useState(false);

  const menuItemClicked = () => {
    setDrawerState(!isSmallScreen);
  };

  const toggleDrawer = () => {
    setDrawerState(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <NavBar drawerHanlder={toggleDrawer} />   
      <Main />
    </div>
  );
}

export default HomePage;
