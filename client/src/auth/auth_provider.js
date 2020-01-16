import React, { useContext } from "./node_modules/react";

const AuthProvider = () => {
  const context = useContext();

  return <div>Provider</div>;
};

export default AuthProvider;
