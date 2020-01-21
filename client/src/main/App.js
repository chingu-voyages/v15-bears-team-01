import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset as resetStyles } from "styled-reset";

import Routes from "./routes";
import AuthProvider from "../auth/auth_provider";

const GlobalStyles = createGlobalStyle`
  ${resetStyles}
  *,*:before,*:after {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    font-size: 62.5%; /* with this font-size: 1em = 10px, 1.4em = 14px, etc. */
  }
  .App {
    text-align: center;
    /* background: ${props => props.theme.dark}; */
  }
  button, link {
    cursor: pointer;
  }
  a {
    color: ${props => props.theme.linkText}
  }
`;

const theme = {
  white: "#fff",
  dark: "#888899",
  linkText: "#fcfcfc"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
