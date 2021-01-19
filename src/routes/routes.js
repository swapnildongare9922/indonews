import React from "react";
import NotFoundPage from "../components/NotFoundPage";
import homeRoutes from "../container/app/home/ops/routes";
import HomePage from "../container/app/home/pages/HomePage";
import appRoute from "../container/app/routeConfig";
import authRoutes from "../container/auth/ops/routes";
import appRoutes from "./app";

const routes=[
   ...appRoute,
   ...authRoutes,
  
//    {
//       path: appRoutes.base,
//       role: ['user'],
//       exact: true,
//       // auth: authRoles.guest,
//       component: () => <HomePage/>
//   },
   // {
   //     component:()=><NotFoundPage/> 
   // }
];
export default routes;

