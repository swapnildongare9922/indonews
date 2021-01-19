import React from "react";
import appRoutes from "../../../../routes/app";
import { ROUTE_TYPE } from "../../../../utils/const";
import UserProfilePage from "../pages/UserProfilePage";
import UserUpdateProfile from "../pages/UserUpdateProfile";

const profileRoutes=[
  {
      path:appRoutes.app.profile.my_profile,
      exact: true,
      type: ROUTE_TYPE.PUBLIC,
      component: () => <UserProfilePage/>
  },
  {
    path:appRoutes.app.profile.update_profile,
    exact:true,
    type: ROUTE_TYPE.PUBLIC,
    component : ()=><UserUpdateProfile />
  }
]; 
export default profileRoutes;
