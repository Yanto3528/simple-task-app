import styled from "styled-components";

export const SearchBarContainer = styled.div`
  form {
    background-color: white;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 5px;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border: 1px solid lightgrey;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    > * {
      color: white;
    }
  }
`;
