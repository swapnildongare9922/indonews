import React from "react";
import appRoutes from "../../../../routes/app";
import { ROUTE_TYPE } from "../../../../utils/const";
import AddBlog from "../component/AddBlog";
import ShowBlogPage from "../pages/ShowBlogPage";
import UpdateBlog from '../pages/UpdateBlog';

const blogRoutes = [
  {
    path: appRoutes.app.blog.list,
    exact: true,
    type: ROUTE_TYPE.PRIVATE,
    component: () => <ShowBlogPage />
  },
  {
    path: appRoutes.app.blog.add,
    exact: true,
    type: ROUTE_TYPE.PRIVATE,
    component: () => <AddBlog />
  },
  {
    path: appRoutes.app.blog.update,
    exact:true,
    type : ROUTE_TYPE.PRIVATE,
    component : ()=> <UpdateBlog />,
  },
  
];
export default blogRoutes;
