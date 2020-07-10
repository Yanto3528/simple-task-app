import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, Nav, Logo, NavMenu, NavMenuItem } from "./styles";
import Container from "../../styles/shared/Container";

const Header = () => {
  return (
    <HeaderContainer data-testid="header">
      <Container>
        <Nav>
          <NavLink to="/">
            <Logo>Simple Task</Logo>
          </NavLink>
          <NavMenu>
            <NavMenuItem>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink exact to="/create" activeClassName="active">
                Create
              </NavLink>
            </NavMenuItem>
          </NavMenu>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
