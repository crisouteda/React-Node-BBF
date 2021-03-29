import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../State-context";
import { StyledButton } from "../Style";
import Style from "./Style";

export default function Navbar(props) {
  const { logged, setLogged } = useContext(StateContext);
  return (
    <ul style={Style.ul}>
      <Link to="/">
        <li style={Style.li}>Home</li>
      </Link>
      <Link to="/main">
        <li style={Style.li}>Main</li>
      </Link>
      <Link to="/sign">
        <li style={Style.li}>Sign Up / Sign In</li>
      </Link>
      {logged && (
        <Link to="/profile">
          <li style={Style.li}>Profile</li>
        </Link>
      )}
      <li>
        <StyledButton margin="auto" onClick={() => setLogged(false)}>
          Logout
        </StyledButton>
      </li>
    </ul>
  );
}
