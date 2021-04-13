import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { StyledCards } from "../Style";
import ItemCard from "./ItemCard";
import { CountContext } from "../CountContext";

const Home = () => {
  const { count } = useContext(CountContext);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:4000/like/getAll`).then((response) => {
      setReviewList(response.data);
    });
  }, [count]);

  return (
    <StyledCards>
      {reviewList.map((val) => {
        return <ItemCard key={val.id} val={val} />;
      })}
    </StyledCards>
  );
};

export default Home;
