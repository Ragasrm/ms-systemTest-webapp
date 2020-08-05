import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Product from './main-components/Product';
import SingUp from './main-components/SingUp';
import Login from './main-components/Login';

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
                    <Route exact  path="/main"  render={() => <Redirect to="/main/product" />}/>
                    {/* <Route path="/Login" component={Login}/>
                    <Route path="/SignUp" component={SingUp}/> */}
                    <Route path="/main/product" component={Product}/>                   
                </Switch>
            </main>
        </div>
    );
};

export default Main;