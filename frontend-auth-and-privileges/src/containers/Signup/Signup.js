import React, { useState } from "react";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";

import LoaderButton from "../../components/LoaderButton/LoaderButton";

import "./Signup.css";

export default function Signup(appProps) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const { userHasAuthenticated } = appProps;

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      //await Auth.signUp(fields.username, fields.confirmationCode);
      // await Auth.signIn(fields.username, fields.password);

      appProps.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <div id="signup-container" className="mt-5">
        <h2>Sign Up!</h2>
        <Form className="form text-left" onSubmit={handleSubmit}>
          <Col>
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input
                autoFocus
                type="text"
                id="firstname"
                placeholder="First"
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input
                type="text"
                id="lastname"
                placeholder="Last"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>
            <LoaderButton
              block
              type="submit"
              isLoading={isLoading}
              size="lg"
              //   disabled={!validateForm(username, password)}
            >
              Sign Up
            </LoaderButton>
          </Col>
        </Form>
      </div>
    </Container>
  );
}
