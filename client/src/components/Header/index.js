import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../utils/auth_context";

import StyledHeader from "./Header.styles";

const Header = () => {
  const context = useContext(AuthContext);

  return (
    <StyledHeader.Container className="app-header">
      <StyledHeader.Logo>
        <Link to="/">Jobseekr</Link>
      </StyledHeader.Logo>
      <StyledHeader.Navigation>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            {context.state.isAuthenticated && (
              <li>
                <Link to="/profile">
                  Profile
                </Link>
              </li>
            )}
            {!context.state.isAuthenticated && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {context.state.isAuthenticated && (
              <li>
                <StyledHeader.NavItem onClick={context.LogOut}>
                  Logout
                </StyledHeader.NavItem>
              </li>
            )}
          </ul>
        </nav>
      </StyledHeader.Navigation>
    </StyledHeader.Container>
  );
};

export default Header;
