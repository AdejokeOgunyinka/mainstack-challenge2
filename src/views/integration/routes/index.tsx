import { lazy } from 'react';
import RouteType from '../../../routes/types';

const Integration = lazy(() => import('../pages/integration'));

const routes: RouteType[] = [
  {
    path: '/integration',
    exact: true,
    auth: false,
    element: <Integration />,
  },
];

export default routes;
