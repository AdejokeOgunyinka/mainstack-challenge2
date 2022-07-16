import { lazy } from 'react';
import RouteType from '../../../routes/types';

const Home = lazy(() => import('../pages/Home'));

const routes: RouteType[] = [
  {
    path: '/get-started',
    exact: true,
    auth: false,
    element: <Home />,
  },
];

export default routes;
