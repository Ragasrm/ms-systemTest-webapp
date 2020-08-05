import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Product from './main-components/Product';

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
                    <Route exact  path="/"  render={() => <Redirect to="/Product" />}/>
                    <Route path="/Product" component={Product}/>
                   
                </Switch>
            </main>
        </div>
    );
};

export default Main;