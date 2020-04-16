import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import Header from "../components/Header";
import AddJob from "../pages/addjob";
import Profile from "../pages/profile";

import Login from "../pages/login";
import EditJob from "../pages/editjob";
import LandingPage from "../pages/landing";

import AuthContext from "../utils/auth_context";
import AddJobForm from "../components/AddJobForm";
import JobDetails from "../pages/jobdetails";

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
          <PrivateRoute
            path="/profile"
            auth={context.state.isAuthenticated}
            component={Profile}
          />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/editjob/:id" component={EditJob} />
          <Route path="/job/:id" component={JobDetails} />
          <Route path="/login" component={Login} />
          <Route path="/add-job" component={AddJob} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
