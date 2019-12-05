import React /*, { useEffect }*/ from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function UnauthenticatedRoute({
  component: C,
  appProps,
  ...rest
}) {
  // Maps Redux store state to props
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const redirect = querystring("redirect");

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <C {...props} {...appProps} />
        ) : (
          <Redirect
            to={redirect === "" || redirect === null ? "/dashboard" : redirect}
          />
        )
      }
    />
  );
}
