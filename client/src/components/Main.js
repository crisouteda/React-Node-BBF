import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Main() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [authorList, setauthorList] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:4000/api/get").then((response) => {
      setauthorList(response.data);
    });
  }, []);

  const submitAuthor = () => {
    Axios.post("http://localhost:4000/api/insert", {
      title: title,
      author: author,
    });

    setauthorList([...authorList, { title: title, author: author }]);
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
      <h1>CRUD APPLICATION</h1>
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
              <h1>{val.title}</h1>
              <p>{val.author}</p>

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
