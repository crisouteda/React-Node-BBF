import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Sign from "./components/Sign/Sign";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { StyledApp } from "./components/Style";
import UserProvider from "./components/UserContext";
import ProtectedRoute from "./components/Protected";
import CountProvider from "./components/CountContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <StyledApp>
          <Navbar />
          <Switch>
            <Route path="/sign" exact component={Sign} />
            <CountProvider>
              <Route path="/" exact component={Home} />
              <ProtectedRoute path="/main" Component={Main} />
              <ProtectedRoute path="/profile" Component={Profile} />
            </CountProvider>
          </Switch>
        </StyledApp>
      </UserProvider>
    </Router>
  );
}

export default App;
