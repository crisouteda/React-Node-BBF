import React, { useState, useContext } from "react";
import Axios from "axios";
import { StyledButton, StyledCard } from "../Style";
import { CountContext } from "./CountContext";

function UpdateForm({ val, ...rest }) {
  const [newAuthor, setNewAuthor] = useState("");
  const { dispatch } = useContext(CountContext);

  const deleteAuthor = (item) => {
    Axios.delete(`http://localhost:4000/api/delete/${item}`).then(() => {
      dispatch({ type: "increment" });
    });
  };

  const updateAuthor = (props) => {
    Axios.put("http://localhost:4000/api/update", {
      id: props,
      author: newAuthor,
    }).then(() => {
      dispatch({ type: "increment" });
    });
  };
  return (
    <StyledCard>
      <h1>{val.title}</h1>
      <h2>{val.author}</h2>
      <div>
        <input
          type="text"
          key={val.id}
          id={val.id}
          name="newAuthor"
          onChange={(e) => {
            setNewAuthor(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <StyledButton
          onClick={() => {
            updateAuthor(val.id);
          }}
        >
          Update
        </StyledButton>
        <StyledButton
          onClick={() => {
            deleteAuthor(val.id);
          }}
        >
          Delete
        </StyledButton>
      </div>
    </StyledCard>
  );
}

export default UpdateForm;
