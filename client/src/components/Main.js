import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { StateContext, UserContext } from "./State-context";

export default function Main() {
  const { logged, setLogged } = useContext(StateContext);
  const { user, setUser } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [authorList, setauthorList] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");
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
      // setNewAuthor("");
    });
  };
  return (
    <div className="App">
      <h1>CRUD APPLICATION {user}</h1>
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
        <button
          onClick={() => {
            submitAuthor();
          }}
        >
          Submit
        </button>
        {authorList.map((val) => {
          return (
            <div className="card" key={val.id}>
              <h1>{val?.title}</h1>
              <p>{val?.author}</p>
              <button
                onClick={() => {
                  deleteAuthor(val.id);
                }}
              >
                Delete
              </button>
              <input
                type="text"
                id="updateInput"
                name="newAuthor"
                onChange={(e) => {
                  setNewAuthor(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  updateAuthor(val.id);
                }}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
