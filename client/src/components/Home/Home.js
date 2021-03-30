import React, { useContext } from "react";
import { StyledCards } from "../Style";
import { UserContext } from "../UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledCards>
      <div>Home</div>
      return <p>{user[0].id}</p>
    </StyledCards>
  );
};

export default Home;
