import React from "react";

import SearchBar from "../../components/SearchBar";
import TodoList from "../../components/Todos/TodoList";

const Home = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <SearchBar />
      <TodoList />
    </div>
  );
};

export default Home;
