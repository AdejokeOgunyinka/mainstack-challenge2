import { lazy } from 'react';
import RouteType from '../../../routes/types';

const Editor = lazy(() => import('../pages/Home'));

const routes: RouteType[] = [
  {
    path: '/editor',
    exact: true,
    auth: false,
    element: <Editor />,
  },
];

export default routes;
