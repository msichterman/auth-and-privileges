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

import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { usePrevious } from "../../utils/custom-hooks";

import "./Login.css";

export default function Login(appProps) {
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
        if (error.id === "LOGIN_FAIL") {
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
  }, [error, prevError, isAuthenticated, dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const user = {
      username,
      password
    };

    // Attempt to login
    dispatch(login(user));
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
            {msg ? <Alert color="danger">{msg}</Alert> : null}
            <LoaderButton
              block
              type="submit"
              isLoading={isLoading}
              size="lg"
              //   disabled={!validateForm(username, password)}
            >
              Login
            </LoaderButton>
          </Col>
        </Form>
      </div>
    </Container>
  );
}
