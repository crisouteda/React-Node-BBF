import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sign from "./components/Sign";
import Home from "./components/Home";
import Profile from "./components/Profile";
// import Protected from "./components/Protected";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== null) {
      setLoggedIn(localStorage.getItem("loggedIn"));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign" exact component={Sign} />
          <Route path="/main" exact component={Main} />
          <Route path="/profile" render={(props) => <Profile {...props} />} />
        </Switch>
        <Footer />
      </div>
      {/* <Protected path="/profile" component={Profile} isAuth={loggedIn} /> */}
    </Router>
  );
}

export default App;
