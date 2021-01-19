import React from "react";
import appRoutes from "../../../../routes/app";
import { ROUTE_TYPE } from "../../../../utils/const";
import HomePage from "../pages/HomePage";
import SingleNewsPage from "../pages/SingleNewsPage";

const homeRoutes=[
  {
      path:appRoutes.base,
      exact: true,
      type: ROUTE_TYPE.PRIVATE,
      component: () => <HomePage/>
  },
  {
    path:appRoutes.app.news.news_details,
    exact: true,
    type: ROUTE_TYPE.PUBLIC,
    component: () => <SingleNewsPage/>
},
  
]; 
export default homeRoutes;
