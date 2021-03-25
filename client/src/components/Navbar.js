import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "./State-context";

export default function Navbar(props) {
  const navStyle = {
    color: "white",
  };

  const { logged, setLogged } = useContext(StateContext);

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
        <button onClick={() => setLogged(false)}>Logout</button>
      </ul>
    </nav>
  );
}
