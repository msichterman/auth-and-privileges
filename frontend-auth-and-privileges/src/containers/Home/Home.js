import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1 className="text-secondary">
          Authentication, Authorization, {"&"} User Privileges
        </h1>
        <img
          src="../.././safe.svg"
          alt="Webpages with lock symbol"
          width="400px"
          className="m-5"
        />
        <p className="px-5">
          Welcome to our application intended to portray basic security
          protocols such as authentication, authorization, and user privileges.
        </p>
      </div>
    </div>
  );
}
