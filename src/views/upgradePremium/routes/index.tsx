import { lazy } from 'react';
import RouteType from '../../../routes/types';

const Premium = lazy(() => import('../pages/premium'));

const routes: RouteType[] = [
  {
    path: '/upgrade-to-premium',
    exact: true,
    auth: false,
    element: <Premium />,
  },
];

export default routes;
