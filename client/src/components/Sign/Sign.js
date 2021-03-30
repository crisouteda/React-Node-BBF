import React, { useState, useContext } from "react";
import axios from "axios";
import LinkButton from "../LinkButton";
import { StyledButton, StyledCards, StyledCard } from "../Style";
import { UserContext } from "../UserContext";

export default function Sign() {
  const { user, dispatch } = useContext(UserContext);
  const [emailUp, setEmailUp] = useState("");
  const [passwordUp, setPasswordUp] = useState("");

  const [emailIn, setEmailIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");

  axios.defaults.withCredentials = true;

  const submitSignUp = () => {
    axios
      .post("http://localhost:4000/auth/signup", {
        email: emailUp,
        password: passwordUp,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const userAuthenticated = () => {
    axios.get("http://localhost:4000/auth/isUserAuth", {}).then((response) => {
      console.log(response);
    });
  };
  const submitSignIn = () => {
    axios
      .post("http://localhost:4000/auth/signin", {
        email: emailIn,
        password: passwordIn,
      })
      .then((response) => {
        if (!response.data.auth) {
        } else {
          const token = response.data.token;
          const id = response.data.id;
          dispatch({
            type: "LOG",
            user: {
              token,
              id,
            },
          });
        }
      });
  };

  return (
    <StyledCards>
      <StyledCard>
        <h1>Sign up</h1>
        <div className="form">
          <label>email</label>
          <input
            type="email"
            name="email"
            id="signInput"
            onChange={(e) => {
              setEmailUp(e.target.value);
            }}
          />
          <label>password</label>
          <input
            type="password"
            name="password"
            id="signInput"
            onChange={(e) => {
              setPasswordUp(e.target.value);
            }}
          />
          <StyledButton onClick={submitSignUp}>Submit</StyledButton>
        </div>
      </StyledCard>
      <StyledCard>
        <h1>Sign in</h1>
        <div className="form">
          <label>email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmailIn(e.target.value);
            }}
          />
          <label>password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPasswordIn(e.target.value);
            }}
          />
          <StyledButton onClick={submitSignIn}>Submit</StyledButton>
        </div>
        {user[0].id !== null && (
          <LinkButton to="/profile" onClick={userAuthenticated}>
            Check authenticated
          </LinkButton>
        )}
      </StyledCard>
    </StyledCards>
  );
}
