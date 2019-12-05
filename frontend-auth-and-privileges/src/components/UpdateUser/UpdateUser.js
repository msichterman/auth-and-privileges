import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import "./UpdateUser.css";
import { updateUser } from "../../actions/dataActions";

export default function UpdateUser(props) {
  const [username, setUsername] = useState(null);
  const [updatedRole, updateRole] = useState(null);
  const [updatedSalary, updateSalary] = useState(0.0);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.data.loading);

  async function handleSubmit() {
    let params = {};
    if (username) {
      params.username = username;
    }
    if (updatedRole !== 0) {
      params.role = updatedRole;
    }
    if (updatedSalary !== 0) {
      params.salary = updatedSalary;
    }
    dispatch(updateUser(params));
  }

  return (
    !loading && (
      <div className="bg-dark text-light p-5">
        <h2 className="mb-5">{props.heading}</h2>
        <Form inline className="d-flex justify-content-around mb-5">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="username" className="mr-sm-2">
              Username:
            </Label>
            <Input
              autoFocus
              type="text"
              id="username"
              placeholder="username"
              onChange={e => setUsername(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="updatedRole" className="mr-sm-2">
              Updated Role:
            </Label>
            <Input
              type="text"
              id="updatedRole"
              placeholder="Role"
              onChange={e => updateRole(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="updatedSalary" className="mr-sm-2">
              Updated Salary:
            </Label>
            {"$"}
            <Input
              type="number"
              min="0"
              id="updatedSalary"
              placeholder="0"
              onChange={e => updateSalary(e.target.value)}
            />
          </FormGroup>

          <Button id="red-update-button" onClick={() => handleSubmit()}>
            Update
          </Button>
        </Form>
      </div>
    )
  );
}
