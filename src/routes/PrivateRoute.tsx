//in PrivateRoute.tsx
import React from "react";
import { Route, RouteProps, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { LazyComponent } from "./types";
// import { IdleTimer } from '../utils/helpers';
// import { logoutUser } from '../views/auth/pages/Login/redux/actions';
interface MyRouteProps extends RouteProps {
  element: React.ReactNode;
  authenticated: boolean;
  header?: LazyComponent;
  rest?: any;
}

const PrivateRoute: React.FC<MyRouteProps> = ({
  element: Component,
  header: Header,
  authenticated,
  ...rest
}) => {
  // const dispatch = useDispatch();
  // const [logout, setLogout] = useState(false);
  // const handleGetTimeRemaining = (time: number) => {
  //   if (time === 0) {
  //     setLogout(true);
  //   }
  // };

  const Navigate = useNavigate();
  // <Redirect to="/login" />

  return (
    <Route
      {...rest}
      element={
        <>
          {Header && <Header />}
          {Component}
        </>
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
