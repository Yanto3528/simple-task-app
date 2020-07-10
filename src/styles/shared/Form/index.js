import styled, { css } from "styled-components";

const inputStyles = css`
  width: 100%;
  outline: none;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.4s;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.danger};
    `}
`;

export const Form = styled.form`
  padding: 20px;
`;

export const InputGroup = styled.div`
  margin-bottom: 10px;
  label {
    display: block;
    font-weight: 600;
  }
  p {
    color: ${({ theme }) => theme.danger};
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Textarea = styled.textarea`
  ${inputStyles};
  resize: none;
`;

export const Select = styled.select`
  ${inputStyles};
  width: auto;
`;
