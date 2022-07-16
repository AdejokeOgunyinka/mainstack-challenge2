import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import PrivateRoutes from "./PrivateRoute";
import PublicRoutes from "./PublicRoutes";

import { NotFound } from "../views/static/pages";

const Loader = lazy(() => import("../components/Loader"));

/**
 * Creates an array of routes distinguished into
 * authenticated or unauthenticated.
 */
const routesArray = routes.map((route) =>
  route.auth ? (
    <PrivateRoutes key={route.path} {...route} />
  ) : (
    <PublicRoutes key={route.path} {...route} />
  )
);

const RoutesHandler: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        {routesArray}
        <Route element={<NotFound />} />
      </Suspense>
    </Router>
  );
};

export default RoutesHandler;
