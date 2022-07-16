import { lazy } from 'react';
import RouteType from '../../../routes/types';

const Refer = lazy(() => import('../pages/refer'));

const routes: RouteType[] = [
  {
    path: '/refer-and-earn',
    exact: true,
    auth: false,
    element: <Refer />,
  },
];

export default routes;
