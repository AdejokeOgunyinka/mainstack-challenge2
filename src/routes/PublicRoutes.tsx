import { Route, RouteProps } from "react-router";
import { LazyComponent } from "./types";

interface MyRouteProps extends RouteProps {
  element: React.ReactNode;
  header?: LazyComponent;
  footer?: LazyComponent;
  advert?: LazyComponent;
  rest?: any;
}

const PublicRoutes: React.FC<MyRouteProps> = ({
  element: Component,
  header: Header,
  footer: Footer,
  advert: Advert,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      element={
        <>
          {Advert && <Advert />}
          {Header && <Header />}
          {Component}
          {Footer && <Footer />}
        </>
      }
    />
  );
};

export default PublicRoutes;
