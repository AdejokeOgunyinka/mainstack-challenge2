import { lazy } from "react";
import RouteType from "../../../routes/types";

const Login = lazy(() => import("../pages/Login"));
const EmailSent = lazy(() => import("../pages/EmailSent"));
const ForgotPassword = lazy(() => import("../pages/ForgotPasswordPage"));
const SignUp = lazy(() => import("../pages/SignUp"));
const NewPassword = lazy(() => import("../pages/NewPassword"));
const VerifyEmail = lazy(() => import("../pages/VerifyEmail"));
const KnowYou = lazy(() => import("../pages/KnowYou"));
const Welcome = lazy(() => import("../pages/WelcomePage"));

const routes: RouteType[] = [
  {
    path: "/",
    exact: true,
    auth: false,
    element: <Login />,
  },
  {
    path: "/login",
    exact: true,
    auth: false,
    element: <Login />,
  },
  {
    path: "/email-sent",
    exact: true,
    auth: false,
    element: <EmailSent />,
  },
  {
    path: "/signup",
    exact: true,
    auth: false,
    element: <SignUp />,
  },
  {
    path: "/new-password",
    exact: true,
    auth: false,
    element: <NewPassword />,
  },
  {
    path: "/verify-email",
    exact: true,
    auth: false,
    element: <VerifyEmail />,
  },
  {
    path: "/forgot-password",
    exact: true,
    auth: false,
    element: <ForgotPassword />,
  },
  {
    path: "/know-you",
    exact: true,
    auth: false,
    element: <KnowYou />,
  },
  {
    path: "/welcome",
    exact: true,
    auth: false,
    element: <Welcome />,
  },
];

export default routes;
