import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sign from "./components/Sign";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { StateContext, UserContext } from "./components/State-context";
// import Protected from "./components/Protected";
function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <StateContext.Provider value={{ logged, setLogged }}>
          <UserContext.Provider value={{ user, setUser }}>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/sign" exact component={Sign} />
              <Route path="/main" exact component={Main} />
              <Route
                path="/profile"
                render={(props) => <Profile {...props} />}
              />
            </Switch>
          </UserContext.Provider>
        </StateContext.Provider>
        <Footer />
      </div>
      {/* <Protected path="/profile" component={Profile} isAuth={loggedIn} /> */}
    </Router>
  );
}

export default App;
