import React, { useContext } from "react";
import { StateContext, UserContext } from "./State-context";

function Profile() {
  const { logged, setLogged } = useContext(StateContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>If you can see this you are authenticated</h1>
      <h1>Status: {logged} </h1>
      {user && <h1> {user}</h1>}
    </div>
  );
}
export default Profile;
