import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import React, { useState } from "react";
import Login from "./pages/LoginForm/index";
import Error404 from "./pages/404Page";
import styles from "./App.css";
import SignUp from "./pages/SignUp";
import ContentPage from "./pages/ContentPage";

function App() {
  let [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
          </li>

          {!isLogin && (
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          )}
          {!isLogin && (
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
            </li>
          )}

          {isLogin && (
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={() => setIsLogin(false)}
                className="nav-link"
              >
                Exit
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          {isLogin && <ContentPage />}
        </Route>
        <Route path="/login">
          <Login setIsLogin={setIsLogin} />
        </Route>
        <Route path="/signup">
          <SignUp setIsLogin={setIsLogin} />
        </Route>
        <Route path="/*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
