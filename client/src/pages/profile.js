import React, { useContext } from "react";
import AuthContext from "../utils/auth_context";

const Profile = () => {
  const context = useContext(AuthContext);

  return <h3> Welcome: {context.state.user.username} </h3>;
};

export default Profile;
