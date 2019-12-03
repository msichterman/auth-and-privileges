import React, { useState, useEffect } from "react";
import { Table, Spinner } from "reactstrap";

import "./UsersTable.css";

export default function UsersTable(props) {
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onLoad() {
    try {
      //const users = await getAllUsers();
      //const filteredUsers = filterUsers(users);
      setUsersLoading(false);
    } catch (e) {
      alert("No users found.");
    }
  }

  // TEMPORARY
  // Will need to be a list of user objects
  const filteredUsers = [];

  // Filter the users that should be shown
  const filterUsers = users => {
    if (props.role === "Admin") {
      return users;
    } else if (props.role === "Production Manager") {
      return users.filter(user => {
        return user.role === "Production Employee";
      });
    } else if (props.role === "Sales Manager") {
      return users.filter(user => {
        return user.role === "Sales Employee";
      });
    }
  };

  return usersLoading ? (
    <div>
      <Spinner color="dark" />
    </div>
  ) : (
    <div className="mt-4 border-top border-bottom" id="table-border-width">
      <h3 className="text-dark p-2 mb-0">{props.heading}</h3>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
