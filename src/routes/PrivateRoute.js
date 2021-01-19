import React, {Component} from 'react';
import {Redirect, Route} from "react-router";
import appRoutes from './app';

class PrivateRoute extends Component {
    render() {        
        const {component: Component, ...rest} = this.props;
        const user={};
        return <Route {...rest} render={props => {
            if (user) {
                return <div><Component {...this.props}/></div>;
            }
            return <Redirect to={{pathname: appRoutes.auth.login, state: {from: props.location}}}/>;
        }}/>;
    }
}

export default PrivateRoute;