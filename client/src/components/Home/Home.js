import React, { useContext } from "react";
import { StyledCards } from "../Style";
import { UserContext } from "../UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledCards>
      <div>Wellcome to the review organizer!!</div>
    </StyledCards>
  );
};

export default Home;
