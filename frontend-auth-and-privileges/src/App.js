import React, { useState, useEffect } from "react";

import AppNavbar from "./components/AppNavbar/AppNavbar";
import Routes from "./Routes";

import "./App.css";

function App() {
  // Ensures that the onLoad function runs before the application is displayed
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  // Is a user authenticated or not
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  // Current User Information
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState(0);

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

    setFullName("Matt Sichterman");
    setRole("Sales Manager");
    // setRole("Production Manager");
    setSalary(100000);

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
      <div className="App">
        <AppNavbar
          authProps={{
            isAuthenticated,
            userHasAuthenticated,
            role
          }}
        />
        <Routes
          appProps={{
            isAuthenticated,
            userHasAuthenticated,
            fullName,
            setFullName,
            role,
            setRole,
            salary,
            setSalary
          }}
        />
      </div>
    )
  );
}

export default App;
