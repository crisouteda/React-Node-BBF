import React, { useContext } from "react";
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
import { UserContext } from "./components/UserContext";

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <UserProvider>
        <StyledApp>
          <Navbar />
          <Switch>
            <Route path="/" isAuth={user[0].id} component={Home} />
            <Route path="/sign" isAuth={user[0].id} component={Sign} />
            <ProtectedRoute path="/main" isAuth={user[0].id} component={Main} />
            <ProtectedRoute
              path="/profile"
              isAuth={user[0].id}
              component={Profile}
            />
          </Switch>
          {/* <Footer /> */}
        </StyledApp>
      </UserProvider>
    </Router>
  );
}

export default App;
