import React, { useContext } from "react";
import { StateContext, UserContext } from "../State-context";
import { StyledCards, StyledButton } from "../Style";

export default function Profile() {
  const { logged, setLogged } = useContext(StateContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <StyledCards>
      <div className="card">
        <h1>
          If you can see this you are authenticated <br /> Status: {logged}
        </h1>
        {user && <h1> {user}</h1>}
        <StyledButton>holaaa</StyledButton>
      </div>
    </StyledCards>
  );
}
