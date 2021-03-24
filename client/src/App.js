import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sign from "./components/Sign";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Protected from "./components/Protected";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem("loggedIn"));
    setLoggedIn(localStorage.getItem("loggedIn"));
    console.log(loggedIn);
  }, [localStorage.getItem("loggedIn")]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign" component={Sign} />
          <Route path="/main" component={Main} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
      <Protected path="/profile" component={Profile} isAuth={loggedIn} />
    </Router>
  );
}

export default App;
