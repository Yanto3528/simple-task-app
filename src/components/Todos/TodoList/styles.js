import styled from "styled-components";

export const TodoListContainer = styled.div`
  max-height: 660px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
