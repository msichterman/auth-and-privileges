import React /*, { useEffect }*/ from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UnauthenticatedRoute({
  component: C,
  appProps,
  ...rest
}) {
  // Maps Redux store state to props
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <C {...props} {...appProps} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
}
