import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const navStyle = {
    color: "white",
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
      </ul>
    </nav>
  );
}
