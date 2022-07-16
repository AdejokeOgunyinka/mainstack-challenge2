import { lazy } from 'react';
import RouteType from '../../../routes/types';

const MyTribe = lazy(() => import('../pages/MyTribe'));
const DiscoverTribes = lazy(() => import('../pages/DiscoverTribes'));
const TribesJoined = lazy(() => import('../pages/TribesJoined'));


const routes: RouteType[] = [
  {
    path: '/tribe',
    exact: true,
    auth: false,
    element: <MyTribe />,
  },
  {
    path: '/discover-tribes',
    exact: true,
    auth: false,
    element: <DiscoverTribes />,
  },
  {
    path: '/tribes-joined',
    exact: true,
    auth: false,
    element: <TribesJoined />,
  },

];

export default routes;
