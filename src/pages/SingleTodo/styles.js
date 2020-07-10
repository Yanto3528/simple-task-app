import styled from "styled-components";
import Icon from "../../styles/shared/Icon";
import Badge from "../../styles/shared/Badge";
import Divider from "../../styles/shared/Divider";
import Card from "../../styles/shared/Card";

export const SingleTodoContainer = styled(Card)`
  margin-top: 50px;
  padding: 20px;
  ${Badge} {
    padding: 10px 20px;
  }
  ${Icon} {
    border: 1px solid lightgrey;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    transition: all 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.danger};
      > * {
        color: white;
      }
    }
  }
  ${Divider} {
    margin-bottom: 10px;
  }
`;

export const TodoHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TodoDate = styled.p`
  display: inline-block;
  font-size: 1.2rem;
  color: white;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "Today":
        return theme.danger;
      case "Tomorrow":
        return theme.success;
      default:
        return theme.primary;
    }
  }};
`;

export const TodoDescription = styled.p`
  white-space: pre;
`;
