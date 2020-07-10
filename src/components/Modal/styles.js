import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  hr {
    margin: 10px 0;
  }
  h3 {
    padding: 20px 20px 5px 20px;
  }
  form {
    padding: 20px;
  }
  .button-group {
    padding: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
