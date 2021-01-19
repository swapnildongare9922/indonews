import blogRoutes from "./blog/ops/routes";
import homeRoutes from "./home/ops/routes";
import preferenceRoutes from "./preferences/ops/routes";
import profileRoutes from "./profile/ops/routes";

const appRoute = [
    ...homeRoutes,
    ...blogRoutes,
    ...profileRoutes,
    ...preferenceRoutes,
];
export default appRoute;