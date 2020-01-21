import styled from 'styled-components';

const Container = styled.header`
  width: 100vw;
  height: 60px;
  padding: 0 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.dark};
  color: ${props => props.theme.white};
`;

const Logo = styled.h1`
  font-size: 2em;
  font-weight: 800;

  & a {
    color: ${props => props.theme.linkText};
    text-decoration: none;
  }
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li > div, li > a {
    margin: 0 36px;
    text-decoration: none;
    color: ${props => props.theme.linkText};
    font-size: 1.6em;
  }
`;

const NavItem = styled.div`
  cursor: pointer;
`;

const StyledHeader = {
  Container,
  Logo,
  Navigation,
  NavItem
};

export default StyledHeader;
