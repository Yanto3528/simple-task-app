import React from "react";

import SearchBar from "../../components/SearchBar";
import TodoList from "../../components/Todos/TodoList";

const Home = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Simple Task App
      </h1>
      <SearchBar />
      <TodoList />
    </div>
  );
};

export default Home;
