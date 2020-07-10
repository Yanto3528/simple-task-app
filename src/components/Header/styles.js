import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.primary};
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  li:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavMenuItem = styled.li`
  a {
    color: #333;
    position: relative;
    transition: all 0.4s;
  }
  a:hover {
    color: ${({ theme }) => theme.primary};
  }

  a.active {
    color: ${({ theme }) => theme.primary};
  }
`;
