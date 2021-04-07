import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";
import { UserContext } from "../UserContext";
import Style from "./Style";

export default function Navbar() {
  const { user, dispatch } = useContext(UserContext);
  return (
    <ul style={Style.ul}>
      <Link to="/">
        <li style={Style.li}>Home</li>
      </Link>
      {user[0].id !== null && (
        <Link to="/main">
          <li style={Style.li}>Main</li>
        </Link>
      )}
      {user[0].id === null && (
        <Link to="/sign">
          <li style={Style.li}>Sign Up / Sign In</li>
        </Link>
      )}
      {user[0].id !== null && (
        <Link to="/profile">
          <li style={Style.li}>Profile</li>
        </Link>
      )}
      {user[0].id !== null && (
        <li>
          <LinkButton
            to="/sign"
            onClick={() => {
              dispatch({ type: "UNLOG", id: null });
              localStorage.clear();
            }}
          >
            Logout
          </LinkButton>
        </li>
      )}
    </ul>
  );
}
