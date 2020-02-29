import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import Login from '../login/Login';
import Home from '../home/Home';

export class Navigation extends React.Component<any, any> {
    public render() {
        const path = () => (<Redirect to="/login" />);
        return (
            <Suspense fallback={<></>}>
                <Switch>
                    <Route path="/" exact={true} render={path} />
                    <Route path="/login" exact={true} component={Login} />
                    <ProtectedRoute path="/home" component={Home} />
                </Switch>
            </Suspense>
        );
    }
};

export default withRouter(Navigation);
