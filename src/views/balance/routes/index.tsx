import { lazy } from 'react';
import RouteType from '../../../routes/types';

const Balance = lazy(() => import('../pages/balance'));

const routes: RouteType[] = [
  {
    path: '/balance',
    exact: true,
    auth: false,
    element: <Balance />,
  },
];

export default routes;
