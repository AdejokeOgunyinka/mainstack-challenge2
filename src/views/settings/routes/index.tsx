import { lazy } from "react";
import RouteType from "../../../routes/types";

const Settings = lazy(() => import("../pages/Home"));

const routes: RouteType[] = [
  {
    path: "/settings",
    exact: true,
    auth: false,
    element: <Settings />,
  },
];

export default routes;
