import React, { useContext } from "react";
import Axios from "axios";
import { StyledButton, StyledCard } from "../Style";
import { CountContext } from "../CountContext";
import UpdateForm from "./UpdateForm";

function EditForm({ val, ...rest }) {
  const { dispatch } = useContext(CountContext);

  const deleteAuthor = (item) => {
    Axios.delete(`http://localhost:4000/api/delete/${item}`).then(() => {
      dispatch({ type: "increment" });
    });
  };

  return (
    <StyledCard>
      <h1>{val.title}</h1>
      <h2>{val.author}</h2>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <UpdateForm id={val.id} />
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

export default EditForm;
