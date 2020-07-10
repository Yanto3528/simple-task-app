import { useState } from "react";

// Sebuah hook untuk mengtoggle suatu value dari true menjadi false
// atau sebaliknya
export default (initialState) => {
  const [toggle, setToggle] = useState(initialState);

  const onToggle = () => setToggle((prevState) => !prevState);

  return [toggle, onToggle];
};
