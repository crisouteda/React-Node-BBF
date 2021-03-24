import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const navStyle = {
    color: "white",
  };
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== null) {
      setLoggedIn(localStorage.getItem("loggedIn"));
    }
  }, []);

  const logout = () => {
    setLoggedIn(localStorage.setItem("loggedIn", false));
  };

  return (
    <nav className="topnav">
      <ul>
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/main">
          <li>Main</li>
        </Link>
        <Link style={navStyle} to="/sign">
          <li>Sign Up / Sign In</li>
        </Link>
        <Link style={navStyle} to="/profile">
          <li>Profile</li>
        </Link>
        <button onClick={logout}>Logout</button>
      </ul>
    </nav>
  );
}
