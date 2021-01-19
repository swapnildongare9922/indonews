import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import routes from "./routes/routes";
import {Route, Switch} from "react-router";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import {ROUTE_TYPE} from "./utils/const";

class App extends Component {
    render() {      
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {                          
                        if (route.type === ROUTE_TYPE.PRIVATE) {
                               console.log("I am in Private");
                                return <PrivateRoute {...route} key={index}/>
                            } else if (route.type === ROUTE_TYPE.PUBLIC) {
                                console.log("Route Type"+route.type);
                                  return <PublicRoute {...route} key={index}/>
                            } else {
                               console.log("Other");
                                return <Route {...route} key={index}/>
                            }
                        }
                    )}
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;

