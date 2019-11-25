import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { NavLink as Link, useHistory } from "react-router-dom";

import "./AppNavbar.css";

export default function AppNavbar({ authProps }) {
  let history = useHistory();

  const { isAuthenticated, userHasAuthenticated } = authProps;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  async function handleLogout() {
    // Signs the user out by clearing the local storage
    // await Auth.signOut();

    // Resets the state values
    userHasAuthenticated(false);
    // userIsConfirmed(false);
    // setUser({});

    // Sends the application to the login page
    history.push("/login");
  }

  return (
    <div>
      <Navbar color="light" light expand="sm" className="mb-5">
        <NavbarBrand tag={Link} exact to="/" className="text-secondary">
          Auth {"&"} User Privileges
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuthenticated ? (
              <NavItem>
                <NavLink onClick={handleLogout} style={{ cursor: "pointer" }}>
                  Logout
                </NavLink>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink
                    tag={Link}
                    exact
                    to="/login"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#E41C38"
                    }}
                  >
                    Login
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
