import { lazy } from 'react';
import RouteType from '../../../routes/types';

const Report = lazy(() => import('../pages/report'));

const routes: RouteType[] = [
  {
    path: '/report-bug',
    exact: true,
    auth: false,
    element: <Report />,
  },
];

export default routes;
