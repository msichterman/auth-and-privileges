import React from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import "./Login.css";

export default function Login() {
  return (
    <Container>
      <div id="login-container">
        <h2>Login</h2>
        <Form className="form text-left">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
            <Button block size="lg">
              Login
            </Button>
          </Col>
        </Form>
      </div>
    </Container>
  );
}
