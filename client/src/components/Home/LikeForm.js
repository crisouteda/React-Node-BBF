import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";
import { UserContext } from "../UserContext";
import { CountContext } from "../CountContext";
import UpdateForm from "./UpdateForm";

function LikeForm({ val, ...rest }) {
  const { count } = useContext(CountContext);
  const { user } = useContext(UserContext);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:4000/like/getLikes/${val.id}/1`).then(
      (response) => {
        setLikes(response.data[0]["count(*)"]);
      }
    );
  }, [count]);

  useEffect(() => {
    Axios.get(`http://localhost:4000/like/getLikes/${val.id}/0`).then(
      (response) => {
        setDislikes(response.data[0]["count(*)"]);
      }
    );
  }, [count]);

  return (
    <div>
      <p>{val.email}</p>
      {user[0].id && <UpdateForm val={val} likes={likes} dislikes={dislikes} />}
    </div>
  );
}

export default LikeForm;
