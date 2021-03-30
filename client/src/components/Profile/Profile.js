import React, { useContext } from "react";
import { StyledCards, StyledButton } from "../Style";
import { UserContext } from "../UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledCards>
      <div className="card">
        <h1>
          If you can see this you are authenticated <br /> Status:{user[0].id}
        </h1>
        {user[0].id && <h1> {user[0].id}</h1>}
        <StyledButton>holaaa</StyledButton>
      </div>
    </StyledCards>
  );
};
export default Profile;
