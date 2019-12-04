import React, { useState } from "react";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";

import LoaderButton from "../../components/LoaderButton/LoaderButton";

import "./Login.css";

export default function Login(appProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { userHasAuthenticated } = appProps;

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      // const user = await Auth.signIn(email, password);
      userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <div id="login-container" className="mt-5">
        <h2>Login</h2>
        <Form className="form text-left" onSubmit={handleSubmit}>
          <Col>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                autoFocus
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
              <Label for="password">Password</Label>
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
              //   disabled={!validateForm(email, password)}
            >
              Login
            </LoaderButton>
          </Col>
        </Form>
      </div>
    </Container>
  );
}
