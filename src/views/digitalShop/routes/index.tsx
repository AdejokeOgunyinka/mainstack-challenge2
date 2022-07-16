import { lazy } from 'react';
import RouteType from '../../../routes/types';

const DigitalShop = lazy(() => import('../pages'));


const routes: RouteType[] = [
  {
    path: '/shop',
    exact: true,
    auth: false,
    element: <DigitalShop />,
  },
];

export default routes;
