
import Login from './Pages/Login';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
        </Switch>
    </BrowserRouter>
)
export default Routes;