import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Sign from "./components/Sign/Sign";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { StyledApp } from "./components/Style";
import UserProvider from "./components/UserContext";
import ProtectedRoute from "./components/Protected";
import CountProvider from "./components/Main/CountContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <StyledApp>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sign" exact component={Sign} />
            <CountProvider>
              <ProtectedRoute path="/main" Component={Main} />
            </CountProvider>
            <ProtectedRoute path="/profile" Component={Profile} />
          </Switch>
          {/* <Footer /> */}
        </StyledApp>
      </UserProvider>
    </Router>
  );
}

export default App;
