import { lazy } from 'react';
import RouteType from '../../../routes/types';

const Masterclass = lazy(() => import('../pages'));

const routes: RouteType[] = [
  {
    path: '/masterclass',
    exact: true,
    auth: false,
    element: <Masterclass />,
  },
];

export default routes;
