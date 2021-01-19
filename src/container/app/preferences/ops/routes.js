import React from "react";
import appRoutes from "../../../../routes/app";
import { ROUTE_TYPE } from "../../../../utils/const";
import UserPreferencePage from "../pages/UserPreferencePage";

const preferenceRoutes=[
  {
      path:appRoutes.app.preference.preferences,
      exact: true,
      type: ROUTE_TYPE.PRIVATE,
      component: () => <UserPreferencePage/>
  }
]; 
export default preferenceRoutes;
