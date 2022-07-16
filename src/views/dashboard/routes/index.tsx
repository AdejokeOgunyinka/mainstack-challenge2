import { lazy } from "react";
import RouteType from "../../../routes/types";

const Summary = lazy(() => import("../pages/Summary"));
const Analytics = lazy(() => import("../pages/Analytics"));
const ClickThrough = lazy(() => import("../pages/ClickThrough"));
const LinkClicks = lazy(() => import("../pages/LinkClicks"));
const MailingList = lazy(() => import("../pages/MailingList"));
const PageView = lazy(() => import("../pages/PageView"));
const PhoneList = lazy(() => import("../pages/PhoneList"));
const Resources = lazy(() => import("../pages/Resources"));
const TopClicked = lazy(() => import("../pages/TopClicked"));
const TopLocation = lazy(() => import("../pages/TopLocation"));
const TopReferral = lazy(() => import("../pages/TopReferral"));

const routes: RouteType[] = [
  {
    path: "/dashboard",
    exact: true,
    auth: false,
    element: <Summary />,
  },
  {
    path: "/analytics",
    exact: true,
    auth: false,
    element: <Analytics />,
  },
  {
    path: "/click-through-rate",
    exact: true,
    auth: false,
    element: <ClickThrough />,
  },
  {
    path: "/link-clicks",
    exact: true,
    auth: false,
    element: <LinkClicks />,
  },
  {
    path: "/mailing-list",
    exact: true,
    auth: false,
    element: <MailingList />,
  },
  {
    path: "/page-view",
    exact: true,
    auth: false,
    element: <PageView />,
  },
  {
    path: "/phone-list",
    exact: true,
    auth: false,
    element: <PhoneList />,
  },
  {
    path: "/downloadable-resources",
    exact: true,
    auth: false,
    element: <Resources />,
  },
  {
    path: "/top-clicked",
    exact: true,
    auth: false,
    element: <TopClicked />,
  },
  {
    path: "/top-location",
    exact: true,
    auth: false,
    element: <TopLocation />,
  },
  {
    path: "/top-referral",
    exact: true,
    auth: false,
    element: <TopReferral />,
  },
];

export default routes;
