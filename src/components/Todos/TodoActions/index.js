import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import Badge from "../../../styles/shared/Badge";
import Icon from "../../../styles/shared/Icon";
import { TodoActionsContainer } from "./styles";

const TodoActions = ({ type, onEdit, onToggleModal }) => {
  return (
    <TodoActionsContainer>
      <Badge type={type}>{type}</Badge>
      <Icon onClick={onEdit} data-testid="edit-icon">
        <FiEdit2 />
      </Icon>
      <Icon onClick={onToggleModal} data-testid="delete-icon">
        <BsTrash />
      </Icon>
    </TodoActionsContainer>
  );
};

export default TodoActions;
