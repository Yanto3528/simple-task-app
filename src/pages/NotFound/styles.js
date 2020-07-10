import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  img {
    width: 600px;
  }
  a {
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: white;
    }
  }
`;
