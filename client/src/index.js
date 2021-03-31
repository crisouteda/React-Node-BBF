import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserContext } from "./components/UserContext";
import UserProvider from "./components/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
