import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import Login from "./pages/login";
import AuthContext from "./utils/auth_context";
import history from "./utils/history";

const Routes = () => {
  const context = useContext(AuthContext);

  //check token expires time on private routes
  const isTokenValid = () => {
    let expiresAt = JSON.parse(localStorage.getItem("expiresIn"));
    return new Date().getTime() < expiresAt;
  };

  const PrivateRoute = ({ component: Component, location, ...rest }) => {
    let isAuthenticated = context.state.isAuthenticated;

    if (!isAuthenticated && isTokenValid()) {
      context.LogOut();
      history.replace("/login");
      return null;
    }
    return <Component {...rest} />;
  };

  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={About} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
