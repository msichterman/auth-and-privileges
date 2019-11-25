import React, { useState, useEffect } from "react";

import AppNavbar from "./components/AppNavbar/AppNavbar";
import Routes from "./Routes";

import "./App.css";

function App() {
  // Ensures that the onLoad function runs before the application is displayed
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  // Is a user authenticated or not
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onLoad() {
    try {
      // Check current session
      //await Auth.currentSession();
      // userHasAuthenticated(true);
      // userIsConfirmed(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
      <div className="App">
        <AppNavbar
          authProps={{
            isAuthenticated,
            userHasAuthenticated
          }}
        />
        <Routes
          appProps={{
            isAuthenticated,
            userHasAuthenticated
          }}
        />
      </div>
    )
  );
}

export default App;
