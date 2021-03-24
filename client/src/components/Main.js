import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Main() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [authorList, setauthorList] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== null) {
      setLoggedIn(true);
    }
    if (localStorage.getItem("userId") !== null) {
      setUserId(localStorage.getItem("userId"));
    }
  }, []);

  useEffect(() => {
    if (userId && loggedIn) {
      Axios.get(`http://localhost:4000/api/get/${userId}`).then((response) => {
        setauthorList(response.data);
      });
    }
  }, [loggedIn, userId]);

  const submitAuthor = () => {
    Axios.post("http://localhost:4000/api/insert", {
      title: title,
      author: author,
      user_id: userId,
    });

    setauthorList([
      ...authorList,
      { title: title, author: author, user_id: userId },
    ]);
  };

  const deleteAuthor = (item) => {
    Axios.delete(`http://localhost:4000/api/delete/${item}`);
  };

  const updateAuthor = (item) => {
    Axios.put("http://localhost:4000/api/update", {
      id: item.id,
      author: newAuthor,
    });
    setNewAuthor("");
  };
  return (
    <div className="App">
      <h1>CRUD APPLICATION {userId}</h1>
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
        <button onClick={submitAuthor}>Submit</button>
        {authorList.map((val) => {
          return (
            <div className="card">
              <h1>{val?.title}</h1>
              <p>{val?.author}</p>

              <button
                onClick={() => {
                  deleteAuthor(val?.id);
                }}
              >
                Delete
              </button>
              <input
                type="text"
                id="updateInput"
                onChange={(e) => {
                  setNewAuthor(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  updateAuthor(val?.id);
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
