import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/home";
import Profile from "../pages/profile";
import About from "../pages/about";
import Login from "../pages/login";
import EditJob from "../pages/editjob";

import AuthContext from "../utils/auth_context";

const Routes = () => {
  const context = useContext(AuthContext);

  const PrivateRoute = ({ component: Component, path, auth }) => (
    <Route
      path={path}
      render={props =>
        auth === true ? (
          <Component auth={auth} {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/about" component={About} />
          {/* <PrivateRoute
            path="/profile"
            auth={context.state.isAuthenticated}
            component={Profile}
          /> */}
          <Route path="/profile" component={Profile} />
          <Route path="/editjob/:id" component={EditJob} />

          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
