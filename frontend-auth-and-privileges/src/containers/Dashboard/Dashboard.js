import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";

import UsersTable from "../../components/UsersTable/UsersTable";

import "./Dashboard.css";

export default function Dashboard(appProps) {
  // const { salary, fullName, role } = appProps;

  return (
    <div>
      <Jumbotron fluid className="bg-dark text-light">
        <Container fluid>
          <h1 className="display-5">Welcome to your dashboard!</h1>
          <p className="lead">
            See your information below including name, role and current salary.
          </p>
          <p className="font-weight-lighter">
            <small>Navigate using the navigation links above!</small>
          </p>
        </Container>
      </Jumbotron>
      <Row className="d-flex justify-content-around">
        <div className="py-3 rounded toast-min">
          <Toast>
            <ToastHeader>Name</ToastHeader>
            <ToastBody>{}</ToastBody>
          </Toast>
        </div>
        <div className="py-3 rounded toast-min">
          <Toast>
            <ToastHeader>Role</ToastHeader>
            <ToastBody>{}</ToastBody>
          </Toast>
        </div>
        <div className="py-3 rounded toast-min">
          <Toast>
            <ToastHeader>Salary</ToastHeader>
            <ToastBody>${}</ToastBody>
          </Toast>
        </div>
      </Row>
      {/* {role === "Admin" ? (
        <UsersTable heading="Manage All Users" />
      ) : role === "Production Manager" ? (
        <UsersTable heading="Manage All Production Employees" />
      ) : role === "Sales Manager" ? (
        <UsersTable heading="Manage All Sales Employees" />
      ) : (
        <></>
      )} */}
    </div>
  );
}
