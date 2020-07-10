import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoAction from "./";

test("renders correctly", () => {
  render(<TodoAction type="Important" />);
  expect(screen.getByText("Important")).not.toBeNull();
  expect(screen.getByTestId("edit-icon")).not.toBeNull();
  expect(screen.getByTestId("delete-icon")).not.toBeNull();
});

test("clicking on edit icon trigger onEdit function", () => {
  const onEdit = jest.fn();
  render(<TodoAction onEdit={onEdit} />);
  fireEvent.click(screen.getByTestId("edit-icon"));
  expect(onEdit).toHaveBeenCalledTimes(1);
});

test("clickin on delete icon trigger onToggleModal function", () => {
  const onToggleModal = jest.fn();
  render(<TodoAction onToggleModal={onToggleModal} />);
  fireEvent.click(screen.getByTestId("delete-icon"));
  expect(onToggleModal).toHaveBeenCalledTimes(1);
});
