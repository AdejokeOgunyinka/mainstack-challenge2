import RouteType from './types';

import authRoutes from '../views/onboarding/routes';
import dashboardRoutes from '../views/dashboard/routes';
import launchpadRoutes from '../views/launchpad/routes';
import settingsRoutes from '../views/settings/routes';
import getStartedRoutes from '../views/getStarted/routes';
import editorRoutes from '../views/editor/routes';
import tribeRoutes from '../views/tribe/routes';
import balanceRoutes from '../views/balance/routes';
import digitalShopRoutes from '../views/digitalShop/routes';
import integrationRoutes from '../views/integration/routes';
import reportBugRoutes from '../views/reportBug/routes';
import referRoutes from '../views/referAndEarn/routes/index';
import masterclassRoutes from '../views/masterclass/routes';
import upgradeToPremiumRoutes from '../views/upgradePremium/routes';

const combinedRoutes: RouteType[] = [
  ...authRoutes,
  ...dashboardRoutes,
  ...launchpadRoutes,
  ...settingsRoutes,
  ...getStartedRoutes,
  ...editorRoutes,
  ...tribeRoutes,
  ...balanceRoutes,
  ...digitalShopRoutes,
  ...integrationRoutes,
  ...reportBugRoutes,
  ...referRoutes,
  ...masterclassRoutes,
  ...upgradeToPremiumRoutes,
];

export default combinedRoutes;
