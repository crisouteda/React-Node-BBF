import React, { useContext } from "react";
import Axios from "axios";
import { StyledButton } from "../Style";
import { UserContext } from "../UserContext";
import { CountContext } from "../CountContext";

function UpdateForm({ val, likes, dislikes, ...rest }) {
  const { user } = useContext(UserContext);
  const { dispatch } = useContext(CountContext);

  const setLike = async (props) => {
    await Axios.get(
      `http://localhost:4000/like/setLike/${user[0].id}/${props.item}`
    ).then((response) => {
      if (response.data[0]["count(*)"] !== 0) {
        Axios.put("http://localhost:4000/like/updateLike", {
          user_id: user[0].id,
          item_id: props.item,
          rate: props.rate,
        });
      } else {
        Axios.post("http://localhost:4000/like/insertLike", {
          user_id: user[0].id,
          item_id: props.item,
          rate: props.rate,
        });
      }
    });
    dispatch({ type: "increment" });
  };

  return (
    <div>
      <StyledButton
        onClick={() => {
          setLike({ item: val.id, rate: 1 });
        }}
      >
        Like {likes}
      </StyledButton>
      <StyledButton
        onClick={() => {
          setLike({ item: val.id, rate: 0 });
        }}
      >
        Dislike {dislikes}
      </StyledButton>
    </div>
  );
}

export default UpdateForm;
