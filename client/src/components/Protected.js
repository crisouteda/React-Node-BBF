import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (isAuth !== null) {
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
