import React, { useState, useEffect } from "react";
function Profile() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("no se sabe");

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
    setUserId(localStorage.getItem("userId"));
  }, []);

  return (
    <div>
      <h1>If you can see this you are authenticated</h1>
      <h1>Status: {loggedIn} </h1>
      {userId && <h1> {userId}</h1>}
    </div>
  );
}
export default Profile;
