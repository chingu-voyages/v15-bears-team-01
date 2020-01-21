import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import Auth from "../auth/auth";
import AuthContext from "../utils/auth_context";

const Login = () => {
  const context = useContext(AuthContext);

  return !context.state.isAuthenticated ? (
    <div>
      <Auth />
    </div>
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );
};

export default Login;
