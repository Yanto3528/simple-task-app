import { v4 } from "uuid";
import moment from "moment";
import actionTypes from "../types";

// Membuat todo baru lalu di tambahkan ke state todo.todos
export const addTodo = (todo) => (dispatch) => {
  // Melakukan format pada date yang ada di todo
  todo.dueDate = moment(todo.dueDate).format("YYYY-MM-DD");
  // untuk value completed di default jadi false
  todo.completed = false;
  todo.id = v4();
  dispatch({
    type: actionTypes.ADD_TODO,
    payload: todo,
  });
};

// Mengupdate todo dengan id dan data todo
export const updateTodo = (id, todo) => ({
  type: actionTypes.UPDATE_TODO,
  payload: { todo, id },
});

// Mengdelete todo dengan id
export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  payload: id,
});

// Mengtoggle todo khusus untuk properti completed
export const toggleTodoCompleted = (id) => ({
  type: actionTypes.TOGGLE_TODO_COMPLETED,
  payload: id,
});

// Mengfilter todo dengan text yang di masukkan oleh user
export const filterTodo = (text) => ({
  type: actionTypes.FILTER_TODO,
  payload: text,
});

// Mengfilter todo dengan type dan juga completed
export const filterByType = (type) => ({
  type: actionTypes.FILTER_BY_TYPE,
  payload: type,
});

// Menghapus semua state filter menjadi null
export const clearFilter = () => ({
  type: actionTypes.CLEAR_FILTER,
});
