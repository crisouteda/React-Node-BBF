import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

function ProtectedRoute({ Component, ...rest }) {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (user[0].id) {
            return <Component />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/sign", state: { from: props.location } }}
              />
            );
          }
        }}
      />
    </div>
  );
}

export default ProtectedRoute;
