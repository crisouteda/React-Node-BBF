import React, { useState } from "react";
import axios from "axios";
import LinkButton from "./LinkButton";

export default function Sign() {
  const [emailUp, setEmailUp] = useState("");
  const [passwordUp, setPasswordUp] = useState("");

  const [emailIn, setEmailIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");

  const [signInStatus, setSignInStatus] = useState(false);

  axios.defaults.withCredentials = true;

  const submitSignUp = () => {
    axios
      .post("http://localhost:4000/auth/signup", {
        // headers: {
        //   "Access-Control-Allow-Origin": "http://127.0.0.1:4000",
        // },
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
          setSignInStatus(false);
        } else {
          setSignInStatus(true);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("userId", response.data.id);
        }
      });
  };

  return (
    <div className="App">
      <div className="cards">
        <div className="card">
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
            <button onClick={submitSignUp}>Submit</button>
          </div>
        </div>
        <div className="card">
          <h1>Sign in</h1>
          <div className="form">
            <label>email</label>
            <input
              type="email"
              name="email"
              id="signInput"
              onChange={(e) => {
                setEmailIn(e.target.value);
              }}
            />
            <label>password</label>
            <input
              type="password"
              name="password"
              id="signInput"
              onChange={(e) => {
                setPasswordIn(e.target.value);
              }}
            />
            <button onClick={submitSignIn}>Submit</button>
          </div>
          {signInStatus === true && (
            <LinkButton to="/profile" onClick={userAuthenticated}>
              Check authenticated
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}
