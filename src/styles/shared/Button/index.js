import styled, { css } from "styled-components";

export default styled.button`
  outline: none;
  border: none;
  background-color: ${({ cancel, theme }) =>
    cancel ? theme.grey : theme.primary};
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}
`;
