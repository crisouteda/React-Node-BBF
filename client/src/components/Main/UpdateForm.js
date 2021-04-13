import React, { useState, useContext } from "react";
import Axios from "axios";
import { StyledButton } from "../Style";
import { CountContext } from "../CountContext";

function UpdateForm({ id, ...rest }) {
  const [update, setUpdate] = useState(false);
  const [newAuthor, setNewAuthor] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const { dispatch } = useContext(CountContext);

  const updateAuthor = (props) => {
    Axios.put("http://localhost:4000/api/updateAuthor", {
      id: props,
      author: newAuthor,
    }).then(() => {
      dispatch({ type: "increment" });
    });
  };

  const updateTitle = (props) => {
    Axios.put("http://localhost:4000/api/updateTitle", {
      id: props,
      title: newTitle,
    }).then(() => {
      dispatch({ type: "increment" });
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {update && (
        <div>
          <div>
            <input
              type="text"
              key={id}
              name="newTitle"
              onChange={(e) => {
                setNewTitle(e.target.value);
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
                updateTitle(id);
              }}
            >
              Update Title
            </StyledButton>
          </div>
        </div>
      )}

      {update && (
        <div>
          <div>
            <input
              type="text"
              key={id}
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
                updateAuthor(id);
              }}
            >
              Update Author
            </StyledButton>
          </div>
        </div>
      )}
      <StyledButton
        onClick={() => {
          setUpdate(!update);
        }}
      >
        {update ? "Cancel" : "Update"}
      </StyledButton>
    </div>
  );
}

export default UpdateForm;
