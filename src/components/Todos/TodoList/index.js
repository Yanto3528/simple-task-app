import React from "react";
import { AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { selectTodos, selectFiltered } from "../../../redux/selectors";

import Todo from "../Todo";
import { TodoListContainer } from "./styles";

const todoStyles = { textAlign: "center", marginTop: "20px" };

const TodoList = ({ todos, filtered }) => {
  // Jika state todos.length adalah 0 maka return placeholder untuk user
  if (todos.length === 0) {
    return <h2 style={todoStyles}>There is no todos. Create one now</h2>;
  }
  // Jika state filtered.length adalah 0 maka return placeholder untuk user
  if (filtered && filtered.length === 0) {
    return <h2 style={todoStyles}>No todos found.</h2>;
  }
  return (
    <TodoListContainer>
      <AnimatePresence>
        {filtered !== null
          ? filtered.map((todo) => <Todo key={todo.id} todo={todo} />)
          : todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </AnimatePresence>
    </TodoListContainer>
  );
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
  filtered: selectFiltered(state),
});

export default connect(mapStateToProps)(TodoList);
