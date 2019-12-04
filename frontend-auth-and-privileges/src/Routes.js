import React from "react";
import { Route, Switch } from "react-router-dom";

// Custom Routes
import AuthenticatedRoute from "./utils/CustomRoutes/AuthenticatedRoute";
import UnauthenticatedRoute from "./utils/CustomRoutes/UnauthenticatedRoute";

// Unauthenticated Routes
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";

// Authenticated Routes
import Dashboard from "./containers/Dashboard/Dashboard";
import Products from "./containers/Products/Products";

// No Route Found
import NotFound from "./containers/NotFound/NotFound";

export default function Routes({ appProps }) {
  return (
    <Switch>
      {/* Anyone can access these routes */}
      <UnauthenticatedRoute
        path="/"
        exact
        component={Home}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/login"
        exact
        component={Login}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      />
      {/* Must be authenticated to access these routes */}
      <AuthenticatedRoute
        path="/dashboard"
        exact
        component={Dashboard}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/products"
        exact
        component={Products}
        appProps={appProps}
      />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
