import React from "react";
import appRoutes from "../../../routes/app";
import { ROUTE_TYPE } from "../../../utils/const";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";

const authRoutes = [
    {
        path: appRoutes.auth.login,
        exact: true,
        type: ROUTE_TYPE.PUBLIC,
        component: () => <LoginPage/>
    },    
    {
        path: appRoutes.auth.register,
        exact: true,
        type: ROUTE_TYPE.PUBLIC,
        component: () => <RegisterPage/>
    },    
];
export default authRoutes;