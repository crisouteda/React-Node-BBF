import React, { useContext } from "react";
import { StyledCards, StyledCard } from "../Style";
import { UserContext } from "../UserContext";
import LinkButton from "../LinkButton";

export default function Profile() {
  const { user } = useContext(UserContext);
  return (
    <StyledCards>
      <StyledCard>
        <h1>
          por que no baaaaaa If you can see this you are authenticated <br />
        </h1>
        {user[0].id && <h1> {user[0].id}</h1>}
        <LinkButton to="/main">Organizer</LinkButton>
      </StyledCard>
    </StyledCards>
  );
}
