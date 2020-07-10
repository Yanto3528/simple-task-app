import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AnimatePresence } from "framer-motion";

// Functions
import { selectTodos } from "../../redux/selectors";
import { updateTodo, deleteTodo } from "../../redux/actions";
import { formatDate } from "../../helpers/compareDate";
import useForm from "../../hooks/useForm";
import useToggle from "../../hooks/useToggle";

// Component dan Styles
import TodoModal from "../../components/Todos/TodoModal";
import Modal from "../../components/Modal";
import TodoActions from "../../components/Todos/TodoActions";
import {
  SingleTodoContainer,
  TodoHeader,
  TodoDate,
  TodoDescription,
} from "./styles";
import Divider from "../../styles/shared/Divider";

// Untuk mencari single todo dengan id yang sama
const getTodo = (todos, id) => todos.find((todo) => todo.id === id);

const SingleTodo = ({ todos, history, match, updateTodo, deleteTodo }) => {
  const [isEdit, toggleEdit] = useToggle(false);
  const [showDeleteModal, toggleDeleteModal] = useToggle(false);
  const [todo] = useState(getTodo(todos, match.params.id));
  const { data, setData, errors, onChange, handleSubmit } = useForm({
    title: "",
    description: "",
    dueDate: "",
    type: "",
  });

  useEffect(() => {
    // Kalau tidak ada todo yang ditemukan lewat match.params.id
    // Maka akan diterus ke page 404 not found
    if (!todo) {
      return history.replace("/not-found");
    } else {
      // Kalau ada todo yang di temukan maka data form di set sesuai dengan data todo
      setData({
        title: todo.title,
        description: todo.description,
        dueDate: todo.dueDate,
        type: todo.type,
      });
    }
  }, [match.params.id, history, setData, todo]);

  const onDeleteModal = () => {
    deleteTodo(todo.id);
    toggleDeleteModal();
    history.push("/");
  };

  const onUpdateTodo = () => {
    updateTodo(todo.id, data);
    toggleEdit();
    history.push("/");
  };

  if (todo) {
    return (
      <SingleTodoContainer>
        <TodoHeader>
          <h2>{todo.title}</h2>
          <TodoActions
            type={todo.type}
            onEdit={toggleEdit}
            onToggleModal={toggleDeleteModal}
          />
        </TodoHeader>
        <Divider />
        <div>
          <TodoDate type={formatDate(todo.dueDate)}>
            {formatDate(todo.dueDate)}
          </TodoDate>
          <TodoDescription>{todo.description}</TodoDescription>
        </div>
        <AnimatePresence>
          {isEdit && (
            <TodoModal
              title="Edit"
              data={data}
              errors={errors}
              onConfirm={handleSubmit(onUpdateTodo)}
              onClose={toggleEdit}
              onChange={onChange}
            />
          )}
          {showDeleteModal && (
            <Modal
              title="Delete"
              content="Are you sure you want to delete this?"
              onConfirm={onDeleteModal}
              onClose={toggleDeleteModal}
            />
          )}
        </AnimatePresence>
      </SingleTodoContainer>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});

export default connect(mapStateToProps, { updateTodo, deleteTodo })(SingleTodo);
