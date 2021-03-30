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

function App() {
  return (
    <Router>
      <StyledApp>
        <UserProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sign" exact component={Sign} />
            <Route path="/main" exact component={Main} />
            <Route path="/profile" render={(props) => <Profile {...props} />} />
          </Switch>
          <Footer />
        </UserProvider>
      </StyledApp>
      {/* <Protected path="/profile" component={Profile} isAuth={loggedIn} /> */}
    </Router>
  );
}

export default App;
