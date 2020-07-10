// import { v4 } from "uuid";
import actionTypes from "../types";

// Mengambil todos dari localstorage;
const todos = JSON.parse(localStorage.getItem("todos"));

// Initial State untuk reducer
// Jika localstorage tidak ada maka todos jadi array kosong
const initialState = localStorage.getItem("todos")
  ? todos
  : {
      todos: [],
      filtered: null,
    };

export default (state = initialState, action) => {
  let newTodos;
  switch (action.type) {
    case actionTypes.ADD_TODO:
      // Tambah todo baru dengan data yang diberikan
      newTodos = { ...state, todos: [...state.todos, action.payload] };
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    case actionTypes.UPDATE_TODO:
      newTodos = {
        ...state,
        // map semua todo lalu jika id yang dipassed in cocok
        // update todo dengan data yang baru
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload.todo }
            : todo
        ),
      };
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    case actionTypes.DELETE_TODO:
      newTodos = {
        ...state,
        // Menghapus todo dengan id
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        // Cek apakah state filtered tidak null
        // Jika ada state filtered maka lakukan penghapusan
        // Ini berfunsi ketika ada user yang memfilter todos
        // Lalu menghapusnya (untuk user experience yang lebih baik saja)
        filtered:
          state.filtered &&
          state.filtered.filter((todo) => todo.id !== action.payload),
      };
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    case actionTypes.TOGGLE_TODO_COMPLETED:
      newTodos = {
        ...state,
        // Mentoggle properti completed jadi lawannya
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    case actionTypes.FILTER_TODO:
      return {
        ...state,
        // Filter todo dengan setiap ketikan user
        // Return hanya todos yang match dengan regex
        filtered: state.todos.filter((todo) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return todo.title.match(regex);
        }),
      };
    case actionTypes.FILTER_COMPLETED:
      return {
        ...state,
        // Mengfilter todos jika action.payload bukan Completed
        // maka return state todo.type yang cocok dengan action.payload (Important, Urgent, Other) selain Completed
        filtered: state.todos.filter((todo) =>
          action.payload !== "Completed"
            ? todo.type === action.payload
            : todo.completed
        ),
      };
    case actionTypes.CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
