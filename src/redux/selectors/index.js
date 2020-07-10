import { createSelector } from "reselect";

const selectTodoState = (state) => state.todo;

// Membuat sebuah selector untuk menselect todos
// Untuk memoized state todos
export const selectTodos = createSelector(
  [selectTodoState],
  (todo) => todo.todos
);

// Membuat sebuah select untuk menselect filtered
// Untuk memoized state filtered
export const selectFiltered = createSelector(
  [selectTodoState],
  (todo) => todo.filtered
);
