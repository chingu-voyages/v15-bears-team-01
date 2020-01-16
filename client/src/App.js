import React from "react";
import Routes from "./routes";
import AuthProvider from "./auth/auth_provider";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
};

export default App;
