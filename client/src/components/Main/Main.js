import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { StateContext, UserContext } from "../State-context";
import { StyledButton, StyledCards, StyledCard } from "../Style";

export default function Main() {
  const { logged, setLogged } = useContext(StateContext);
  const { user, setUser } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [authorList, setauthorList] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");
  const [show, setShow] = useState(false);
  const [input, setInput] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (user && logged) {
      Axios.get(`http://localhost:4000/api/get/${user}`).then((response) => {
        setauthorList(response.data);
      });
    }
  }, [count]);

  const submitAuthor = () => {
    Axios.post("http://localhost:4000/api/insert", {
      title: title,
      author: author,
      user_id: user,
    }).then(() => {
      setCount(count + 1);
    });
  };

  const deleteAuthor = (item) => {
    Axios.delete(`http://localhost:4000/api/delete/${item}`).then(() => {
      setCount(count + 1);
    });
  };

  const updateAuthor = (props) => {
    Axios.put("http://localhost:4000/api/update", {
      id: props,
      author: newAuthor,
    }).then(() => {
      setCount(count + 1);
    });
  };
  return (
    <StyledCards>
      {show === false && (
        <StyledCard>
          <StyledButton onClick={() => setShow(!show)}>
            {show === false && "Add review"}
          </StyledButton>
        </StyledCard>
      )}
      {show === true && (
        <StyledCard>
          <h1>Insert a movie</h1>
          <div className="form">
            <label>Movie name</label>
            <input
              type="text"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label>Author</label>
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
        </StyledCard>
      )}
      {authorList.map((val) => {
        return (
          <StyledCard key={val.id}>
            <h1>{val?.title}</h1>
            <h2>{val?.author}</h2>
            {input && (
              <div>
                <input
                  type="text"
                  id="updateInput"
                  name="newAuthor"
                  onChange={(e) => {
                    setNewAuthor(e.target.value);
                  }}
                />
                <StyledButton
                  onClick={() => {
                    updateAuthor(val.id);
                  }}
                >
                  Update
                </StyledButton>
              </div>
            )}
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
                  setInput(!input);
                }}
              >
                {input === true ? "Cancel" : "Update"}
              </StyledButton>

              <StyledButton
                // bottom="0px"
                onClick={() => {
                  deleteAuthor(val.id);
                }}
              >
                Delete
              </StyledButton>
            </div>
          </StyledCard>
        );
      })}
    </StyledCards>
  );
}
