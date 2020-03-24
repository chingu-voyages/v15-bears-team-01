import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../utils/auth_context";

import StyledHeader from "./Header.styles";

const Header = () => {
  const context = useContext(AuthContext);
  const navLinksLoggedIn = (
    <Fragment>
      <li>
        <Link to="/profile">Profile</Link>
      </li>

      <li>
        <StyledHeader.NavItem onClick={context.LogOut}>
          Logout
        </StyledHeader.NavItem>
      </li>
    </Fragment>
  );

  const navLinks = (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <StyledHeader.Container className="app-header">
      <StyledHeader.Logo>
        <Link to="/">Jobseekr</Link>
      </StyledHeader.Logo>
      <StyledHeader.Navigation>
        <nav>
          <ul>{context.state.isAuthenticated ? navLinksLoggedIn : navLinks}</ul>
        </nav>
      </StyledHeader.Navigation>
    </StyledHeader.Container>
  );
};

export default Header;
