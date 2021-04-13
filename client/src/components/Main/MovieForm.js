import React, { useState, useContext } from "react";
import Axios from "axios";
import { StyledButton, StyledCard } from "../Style";
import { UserContext } from "../UserContext";
import { CountContext } from "../CountContext";

function MovieForm({ id, ...rest }) {
  const { user } = useContext(UserContext);
  const { dispatch } = useContext(CountContext);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submitAuthor = () => {
    Axios.post("http://localhost:4000/api/insert", {
      title: title,
      author: author,
      user_id: user[0].id,
    }).then(() => {
      dispatch({ type: "increment" });
    });
  };
  return (
    <StyledCard>
      {show === false && (
        <StyledButton onClick={() => setShow(!show)}>
          {show === false && "Add review"}
        </StyledButton>
      )}
      {show === true && (
        <div className="form">
          <h1>Insert a movie</h1>
          <label>Movie name</label>
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>Director</label>
          <input
            type="text"
            name="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
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
                submitAuthor();
              }}
            >
              Submit
            </StyledButton>
            <StyledButton onClick={() => setShow(!show)}>
              {show === true && "Cancel"}
            </StyledButton>
          </div>
        </div>
      )}
    </StyledCard>
  );
}

export default MovieForm;
