import React, { useContext } from "react";
import { StyledCards, StyledCard } from "../Style";
import { UserContext } from "../UserContext";
import LinkButton from "../LinkButton";

export default function Profile() {
  const { user } = useContext(UserContext);
  return (
    <StyledCards>
      <StyledCard>
        {user[0].id && <h1> Wellcome {user[0].username}! </h1>}
        <br />
        <LinkButton to="/main">See your Movies!</LinkButton>
      </StyledCard>
    </StyledCards>
  );
}
