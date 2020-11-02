import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './main-components/Dashboard';


const Main = () => {
    const useStyles = makeStyles(theme => ({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
    }));
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <Toolbar />
            <main>
                <Switch>
                    <Route exact  path="/main"  render={() => <Redirect to="/main/dashboard" />}/>                  
                    <Route path="/main/dashboard" component={Dashboard}/>                   
                </Switch>
            </main>
        </div>
    );
};

export default Main;