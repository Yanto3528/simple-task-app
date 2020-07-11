import React from "react";
import { render, screen } from "@testing-library/react";
import TodoModal from "./";

const props = {
  title: "Edit",
  data: {
    title: "Learn React",
    description: "React Testing",
    completed: false,
    type: "Urgent",
    dueDate: "2020-07-10",
  },
};

test("render correctly", () => {
  const onChange = jest.fn();
  render(<TodoModal {...props} onChange={onChange} />);
  expect(screen.getByText("Edit")).not.toBeNull();
  expect(screen.getByDisplayValue("Learn React")).not.toBeNull();
  expect(screen.getByDisplayValue("React Testing")).not.toBeNull();
  expect(screen.getByDisplayValue("2020-07-10")).not.toBeNull();
  expect(screen.getByDisplayValue("Urgent")).not.toBeNull();
});
