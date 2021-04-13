import React from "react";
import { StyledCard } from "../Style";
import LikeForm from "./LikeForm";

function ItemCard({ val, ...rest }) {
  return (
    <StyledCard>
      <h1>{val.title}</h1>
      <h2>{val.author}</h2>
      <LikeForm val={val} />
    </StyledCard>
  );
}

export default ItemCard;
