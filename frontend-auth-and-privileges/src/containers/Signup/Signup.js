import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import LoaderButton from "../../components/LoaderButton/LoaderButton";

import { signup } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { usePrevious } from "../../utils/custom-hooks";

import "./Signup.css";

export default function Signup(appProps) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  // Maps Redux store state to props
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const error = useSelector(state => state.error);

  // Allows us to use the store's dispatch
  const dispatch = useDispatch();

  // Gets the previous error
  const prevError = usePrevious(error);

  // componentDidUpdate
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // componentDidUpdate logic
      if (error !== prevError) {
        // Check for login error
        if (error.id === "SIGNUP_FAIL") {
          setMsg(error.msg.msg);
          setIsLoading(false);
        } else {
          setMsg(null);
        }
      }

      // If authenticated, close modal
      if (isAuthenticated) {
        dispatch(clearErrors());
      }
    }
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    // Create user object
    const newUser = {
      firstname,
      lastname,
      username,
      password
    };

    // Attempt to signup
    dispatch(signup(newUser));
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
            {msg ? <Alert color="danger">{msg}</Alert> : null}
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
