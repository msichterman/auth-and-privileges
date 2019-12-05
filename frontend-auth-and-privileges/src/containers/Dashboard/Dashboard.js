import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import UsersTable from "../../components/UsersTable/UsersTable";
import UpdateUser from "../../components/UpdateUser/UpdateUser";
import { getUsers } from "../../actions/dataActions";
import "./Dashboard.css";

export default function Dashboard() {
  const [isPopulating, setIsPopulating] = useState(true);

  // Maps Redux store state to props
  const salary = useSelector(state => state.auth.user.salary);
  const firstname = useSelector(state => state.auth.user.firstname);
  const lastname = useSelector(state => state.auth.user.lastname);
  const role = useSelector(state => state.auth.user.role);

  // Allows us to use the store's dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onLoad() {
    if (role === "Admin" || "Production Manager" || "Sales Manager") {
      dispatch(getUsers());
    }

    setIsPopulating(false);
  }

  return (
    !isPopulating && (
      <div>
        <Jumbotron fluid className="bg-dark text-light">
          <Container fluid>
            <h1 className="display-5">Welcome to your dashboard!</h1>
            <p className="lead">
              See your information below including name, role and current
              salary.
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
              <ToastBody>{firstname + " " + lastname}</ToastBody>
            </Toast>
          </div>
          <div className="py-3 rounded toast-min">
            <Toast>
              <ToastHeader>Role</ToastHeader>
              <ToastBody>
                {role === "User" ? "Waiting for account confirmation..." : role}
              </ToastBody>
            </Toast>
          </div>
          <div className="py-3 rounded toast-min">
            <Toast>
              <ToastHeader>Salary</ToastHeader>
              <ToastBody>
                {salary === 0
                  ? "Waiting for account confirmation..."
                  : "$" + salary}
              </ToastBody>
            </Toast>
          </div>
        </Row>
        {role === "Admin" ? (
          <UsersTable heading="Manage All Users" />
        ) : role === "Production Manager" ? (
          <UsersTable heading="Manage Production Employees" />
        ) : role === "Sales Manager" ? (
          <UsersTable heading="Manage Sales Employees" />
        ) : (
          <></>
        )}
        {role === "Admin" ? (
          <UpdateUser heading="Update Any User" />
        ) : role === "Production Manager" ? (
          <UpdateUser heading="Update a Production Employee" />
        ) : role === "Sales Manager" ? (
          <UpdateUser heading="Update a Sales Employee" />
        ) : (
          <></>
        )}
      </div>
    )
  );
}
