import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useSelector } from "react-redux";

import "./UpdateUser.css";

export default function UpdateUser(props) {
  const [username, setUsername] = useState(null);
  const [updatedRole, updateRole] = useState(null);
  const [updatedSalary, updateSalary] = useState(0.0);

  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(event) {
    // dispatch(updateUser(username, updatedRole, updatedSalary));
  }

  return (
    !loading && (
      <div className="bg-dark text-light p-5">
        <h2 className="mb-5">{props.heading}</h2>
        <Form
          inline
          className="d-flex justify-content-around mb-5"
          onSubmit={handleSubmit}
        >
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

          <Button id="red-update-button">Update</Button>
        </Form>
      </div>
    )
  );
}
