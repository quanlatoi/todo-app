import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from '../history';

import { PrivateRoute } from './PrivateRoute';
import PageNotFound from '../components/PageNotFound';
import { AsyncFunction } from '../utils/asyncFunction';
import Login from './Login';

function NextApp() {

    history.listen((location, action) => {
        // console.log(location)
        // console.log(action)
    })

    return (
        <Router history={history}>
            <Switch>
                <Route path='/login' component={Login} />
                <PrivateRoute exact path='/' component={AsyncFunction(() => import('../components/Dashboard'))} />
                <PrivateRoute path='/tasks/:id' component={AsyncFunction(() => import('../components/Home'))} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    )
}

export default NextApp;
