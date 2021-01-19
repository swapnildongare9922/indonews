import React, {Component} from 'react';
import {Redirect, Route} from "react-router";
import appRoutes from './app';


class PublicRoute extends Component {
    render() {      
        const {component: Component,...rest} = this.props;
        const auth={};
        //const {location: {pathname}} = this.props;
       return <Route {...rest} render={props => {
            if (auth&&auth.token) {
                 console.log("call the function the");
                return <Redirect to={{pathname: appRoutes.base, state: {from: props.location}}}/>;
            }
            return <Component {...this.props}/>
        }}/>;
    }
}

export default PublicRoute;