import React, { useContext } from "react";
import AuthContext from "../utils/auth_context";

const Home = () => {
  const context = useContext(AuthContext);
  return (
    <div>
      <div>
        <button onClick={context.LogOut}>Logout</button>
      </div>
      <div>
        <button onClick={() => console.log(context)}>State</button>
      </div>
      {context.state.isAuthenticated ? <p> Logged In </p> : <p> Logged Out </p>}
    </div>
  );
};

export default Home;
