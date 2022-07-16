import { lazy } from 'react';
import RouteType from '../../../routes/types';

const Launchpad = lazy(() => import('../pages/Home'));

const routes: RouteType[] = [
  {
    path: '/launchpad',
    exact: true,
    auth: false,
    element: <Launchpad />,
  },
];

export default routes;
