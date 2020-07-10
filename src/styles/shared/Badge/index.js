import styled from "styled-components";

export default styled.span`
  border-radius: 5px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "Urgent":
        return theme.danger;
      case "Important":
        return theme.success;
      default:
        return theme.primary;
    }
  }};
  padding: 5px 20px;
  color: white;
  font-size: 1.2rem;
`;
