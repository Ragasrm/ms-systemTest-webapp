import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route,Switch, Redirect } from 'react-router-dom';
import Login from './components/main-components/Login';
import HomePage from './components/main-components/HomePage';
import RouteGuard from './components/main-components/RouteGuard';
import SingUp from './components/main-components/SingUp';


function App() {


  return (
    <div >
      <CssBaseline />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/Login" />} />
        <Route path="/Login" component={Login}/>
        <Route path="/SignUp" component={SingUp}/>
        <RouteGuard path="/main" component={HomePage} />
       </Switch>
    
    </div>
  );
}

export default App;
