import React, {useState} from "react";
import {Table, Spinner, Button, Input} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateUser, updateUserEditing} from "../../actions/dataActions";
import "./UsersTable.css";

export default function UsersTable(props) {
    const [role, updateRole] = useState(null);
    const [salary, updateSalary] = useState(0);

    // Maps Redux store state to props
    const loading = useSelector(state => state.data.loading);
    const users = useSelector(state => state.data.users);
    const userEditing = useSelector(state => state.data.userEditing);

    const dispatch = useDispatch();

  async function handleSubmit(username) {
    let params = {};
    if (role !== null) {
      params.role = role;
    }
    if (salary !== 0) {
      params.salary = salary;
    }
    params.username = username;
    dispatch(updateUser(params));
    dispatch(updateUserEditing(null));
    updateRole(null);
    updateSalary(0);
  }

    return loading ? (
        <div>
            <Spinner color="dark"/>
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
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => {
                    return (
                        <tr key={user.username}>
                            <td>{user.firstname + " " + user.lastname}</td>
                            <td>{user.username}</td>
                            {user.username === userEditing ? (
                                <td>
                                    <Input
                                        type="text"
                                        id="role"
                                        placeholder={user.role}
                                        onChange={e => updateRole(e.target.value)}
                                    />
                                </td>
                            ) : (
                                <td>
                                    {user.role === "User"
                                        ? "Waiting for account confirmation..."
                                        : user.role}
                                </td>
                            )}
                            {user.username === userEditing ? (
                                <td>
                                    <Input
                                        type="text"
                                        id="salary"
                                        placeholder={user.salary}
                                        onChange={e => updateSalary(e.target.value)}
                                    />
                                </td>
                            ) : (
                                <td>
                                    {user.salary === 0
                                        ? "Waiting for account confirmation..."
                                        : "$" + user.salary}
                                </td>
                            )}
                            {user.username === userEditing ? (
                                <>
                                    <td>
                                        <Button id="red-update-button"
                                                onClick={() => handleSubmit(user.username)}>
                                            Update
                                        </Button>
                                    </td>
                                    <td>
                                        <Button id="red-update-button"
                                                onClick={() => {
                                                  dispatch(updateUserEditing(null));
                                                  updateSalary(0);
                                                  updateRole(null);
                                                }}>
                                            Cancel
                                        </Button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td></td>
                                    <td>
                                        <Button id="red-update-button"
                                                onClick={() => dispatch(updateUserEditing(user.username))}>
                                            Edit
                                        </Button>
                                    </td>
                                </>
                            )}
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
}
