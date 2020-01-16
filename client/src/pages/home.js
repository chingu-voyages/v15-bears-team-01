import React, { useContext } from "react";
import AuthContext from "../utils/auth_context";

const Home = () => {
  const context = useContext(AuthContext);
  return (
    <div>
      <button onClick={context.LogOut}>GGG</button> Home
    </div>
  );
};

export default Home;
