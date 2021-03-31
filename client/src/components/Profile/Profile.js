import React, { useContext } from "react";
import { StyledCards, StyledCard, StyledButton } from "../Style";
import { UserContext } from "../UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledCards>
      <StyledCard>
        <h1>
          If you can see this you are authenticated <br /> Status:{user[0].id}
        </h1>
        {user[0].id && <h1> {user[0].id}</h1>}
        <StyledButton>holaaa</StyledButton>
      </StyledCard>
    </StyledCards>
  );
};
export default Profile;
