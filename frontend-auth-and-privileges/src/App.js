import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import AppNavbar from "./components/AppNavbar/AppNavbar";

import Routes from "./Routes";
import { loadUser } from "./actions/authActions";

import "./App.css";

function App() {
  // Ensures that the onLoad function runs before the application is displayed
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  // Allows us to use the store's dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onLoad() {
    dispatch(loadUser());

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
      <div className="App">
        <AppNavbar />
        <Routes />
      </div>
    )
  );
}

export default App;
