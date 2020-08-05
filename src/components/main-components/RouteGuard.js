import React, { PureComponent } from "react";
import { Route, Redirect } from "react-router-dom";

function RouteGuard(props) {
  const { component, ...rest } = props;
  const Component = component;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("isAuthenticated") ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

export default RouteGuard;
