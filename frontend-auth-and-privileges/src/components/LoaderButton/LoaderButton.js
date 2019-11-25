import React from "react";
import { Col, Container, Button, Spinner } from "reactstrap";
import "./LoaderButton.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {props.children}
      <Col>
        {isLoading && (
          <Container>
            <Spinner type="grow" color="light" size="sm" />
            <Spinner type="grow" color="light" size="sm" />
            <Spinner type="grow" color="light" size="sm" />
          </Container>
        )}
      </Col>
    </Button>
  );
}
