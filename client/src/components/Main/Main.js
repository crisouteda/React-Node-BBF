import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { UserContext } from "../UserContext";
import { StyledCards } from "../Style";
import MovieForm from "./MovieForm";
import UpdateForm from "./UpdateForm";
import { CountContext } from "./CountContext";

export default function Main() {
  const { user } = useContext(UserContext);
  const { count } = useContext(CountContext);

  const [authorList, setauthorList] = useState([]);

  useEffect(() => {
    if (user[0].id) {
      Axios.get(`http://localhost:4000/api/get/${user[0].id}`).then(
        (response) => {
          setauthorList(response.data);
        }
      );
    }
  }, [count, user[0].id]);

  return (
    <StyledCards>
      <MovieForm />
      {authorList.map((val) => {
        return <UpdateForm key={val.id} val={val} />;
      })}
    </StyledCards>
  );
}
