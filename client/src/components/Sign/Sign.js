import React, { useContext } from "react";
import axios from "axios";
import LinkButton from "../LinkButton";
import { StyledCards, StyledCard } from "../Style";
import { UserContext } from "../UserContext";
import SignForm from "./Form";

export default function Sign() {
  const { user } = useContext(UserContext);

  axios.defaults.withCredentials = true;

  const userAuthenticated = () => {
    axios.get("http://localhost:4000/auth/isUserAuth", {}).then((response) => {
      console.log(response);
    });
  };
  return (
    <StyledCards>
      <StyledCard>
        <SignForm id="signUpInput" />
      </StyledCard>
      <StyledCard>
        <SignForm id="signInInput" />
        {user[0].id !== null && (
          <LinkButton to="/profile" onClick={userAuthenticated}>
            Check authenticated
          </LinkButton>
        )}
      </StyledCard>
    </StyledCards>
  );
}
