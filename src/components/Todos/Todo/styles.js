import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Icon from "../../../styles/shared/Icon";

export const TodoContainer = styled(motion.div)`
  cursor: pointer;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  &:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.lightgrey};
  }
  > div {
    display: flex;
    align-items: center;
    flex: 1;
  }
  > input {
    margin-right: 10px;
  }
  > div {
    padding: 20px 0;
  }
`;

export const TodoTitle = styled.p`
  ${({ completed }) =>
    completed &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.grey};
    `}
`;

export const IconGroup = styled.span`
  span:not(:last-child) {
    margin-right: 20px;
  }
  ${Icon} {
    > * {
      color: ${({ theme }) => theme.grey};
    }
    &:hover {
      > * {
        color: black;
      }
    }
  }
`;
