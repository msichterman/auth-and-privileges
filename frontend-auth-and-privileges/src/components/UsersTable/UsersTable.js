import React from "react";
import { Table, Spinner } from "reactstrap";
import { useSelector } from "react-redux";

import "./UsersTable.css";

export default function UsersTable(props) {
  // Maps Redux store state to props
  const loading = useSelector(state => state.data.loading);
  const users = useSelector(state => state.data.users);

  return loading ? (
    <div>
      <Spinner color="dark" />
    </div>
  ) : (
    <div className="mt-4 border-top border-bottom" id="table-border-width">
      <h3 className="text-dark p-2 mb-0">{props.heading}</h3>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.username}>
                <td>{user.firstname + " " + user.lastname}</td>
                <td>{user.username}</td>
                <td>
                  {user.role === "User"
                    ? "Waiting for account confirmation..."
                    : user.role}
                </td>
                <td>
                  {user.salary === 0
                    ? "Waiting for account confirmation..."
                    : "$" + user.salary}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
