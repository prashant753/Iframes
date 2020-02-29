import * as React from 'react';
import {
    Route,
    Redirect,
    RouteProps,
} from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
    component: any;
}
export const ProtectedRoute = (props: IPrivateRouteProps) => {
    const { component: Component, ...rest } = props;
    const redirect = (routeProps: any) => redirection(props, routeProps);
    return (
        <Route
            {...rest}
            render={redirect}
        />
    );
};

const redirection = (props: any, routeProps: any) =>
    (localStorage.getItem('login') === null) ? (
        <Redirect
            to={{
                pathname: '/login',
                // from: routeProps.location,
            }}
        />
    ) : (
            <props.component {...routeProps}/>
        );

export default ProtectedRoute;
