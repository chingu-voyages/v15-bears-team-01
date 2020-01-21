import React from 'react';
import { Link } from 'react-router-dom';

import StyledHeader from './Header.styles';

const Header = () => {

  return (
    <StyledHeader.Container className="app-header">
      <StyledHeader.Logo>
        <Link to="/">Jobseekr</Link>
      </StyledHeader.Logo>
      <StyledHeader.Navigation>
        <nav>
          <ul>
            <li>
              <StyledHeader.NavItem to="/about">About</StyledHeader.NavItem>
            </li>
            <li>
              <StyledHeader.NavItem to="/profile">Profile</StyledHeader.NavItem>
            </li>
            <li>
              <StyledHeader.NavItem to="/login">Login</StyledHeader.NavItem>
            </li>
          </ul>
        </nav>
      </StyledHeader.Navigation>
    </StyledHeader.Container>
  );
};

export default Header;