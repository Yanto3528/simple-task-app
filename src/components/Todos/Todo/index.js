import React from "react";
import { useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { toggleTodoCompleted, deleteTodo } from "../../../redux/actions";
import useToggle from "../../../hooks/useToggle";

// Component dan Styles
import Modal from "../../Modal";
import { BsTrash } from "react-icons/bs";
import { TodoContainer, TodoTitle, IconGroup } from "./styles";
import Icon from "../../../styles/shared/Icon";
import Badge from "../../../styles/shared/Badge";

const Todo = ({ todo, toggleTodoCompleted, deleteTodo }) => {
  const { title, completed, type } = todo;
  const [showDeleteModal, toggleDeleteModal] = useToggle(false);
  const history = useHistory();

  // Menghandle checkbox dimana akan toggle state todo.completed
  const handleChange = (e) => {
    toggleTodoCompleted(todo.id);
  };
  // Menghandle penghapusan todo dengan passed in id todo
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo.id);
  };

  return (
    <TodoContainer exit={{ opacity: 0 }}>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <div onClick={() => history.push(`/todo/${todo.id}`)}>
        <TodoTitle completed={completed}>{title}</TodoTitle>
      </div>
      <IconGroup>
        <Badge type={type}>{type}</Badge>
        <Icon onClick={toggleDeleteModal}>
          <BsTrash />
        </Icon>
      </IconGroup>
      <AnimatePresence>
        {showDeleteModal && (
          <Modal
            title="Delete"
            content="Are you sure you want to delete this?"
            onConfirm={handleDelete}
            onClose={toggleDeleteModal}
          />
        )}
      </AnimatePresence>
    </TodoContainer>
  );
};

export default connect(null, { toggleTodoCompleted, deleteTodo })(Todo);
