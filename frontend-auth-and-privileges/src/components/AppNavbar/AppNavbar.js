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
      <Navbar color="light" light expand="sm">
        <NavbarBrand tag={Link} exact to="/" className="text-dark">
          Auth {"&"} User Privileges
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuthenticated ? (
              <>
                <NavItem>
                  <NavLink
                    tag={Link}
                    exact
                    to="/dashboard"
                    activeClassName="navlink-active"
                  >
                    Dashboard
                  </NavLink>
                </NavItem>
                {"  "}
                <NavItem>
                  <NavLink
                    tag={Link}
                    exact
                    to="/products"
                    activeClassName="navlink-active"
                  >
                    Products
                  </NavLink>
                </NavItem>
                {"  "}
                <NavItem>
                  <NavLink
                    tag={Link}
                    onClick={handleLogout}
                    to="/login"
                    className="navlink-style"
                    activeClassName="navlink-active"
                  >
                    Logout
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink
                    tag={Link}
                    exact
                    to="/login"
                    activeClassName="navlink-active"
                  >
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    exact
                    to="/signup"
                    activeClassName="navlink-active"
                  >
                    Sign Up
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
