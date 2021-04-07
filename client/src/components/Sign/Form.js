import React, { useState, useContext } from "react";
import axios from "axios";
import { StyledButton } from "../Style";
import { UserContext } from "../UserContext";

function SignForm({ id, ...rest }) {
  const { dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.defaults.withCredentials = true;

  const submitSignUp = () => {
    axios
      .post("http://localhost:4000/auth/signup", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const submitSignIn = () => {
    axios
      .post("http://localhost:4000/auth/signin", {
        email: email,
        password: password,
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
    <div className="form">
      {id === "signUpInput" && <h1>Sign Up</h1>}
      {id === "signInInput" && <h1>Sign In</h1>}
      <label>email</label>
      <br />
      <input
        type="email"
        name="email"
        id={id}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>password</label>
      <br />
      <input
        type="password"
        name="password"
        id={id}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {id === "signUpInput" && (
        <StyledButton onClick={submitSignUp}>Register</StyledButton>
      )}
      {id === "signInInput" && (
        <StyledButton onClick={submitSignIn}>Log in</StyledButton>
      )}
    </div>
  );
}

export default SignForm;
