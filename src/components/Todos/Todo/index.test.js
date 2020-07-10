import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { toggleTodoCompleted, deleteTodo } from "../../../redux/actions";
import { initialState } from "../../../utils";
import moment from "moment";
import { renderWithRedux } from "../../../testHelpers";
import Todo from "./";

const mockStore = configureStore([]);

const todo = {
  title: "Learn React",
  description: "Learning how to create a website with React",
  completed: false,
  type: "Urgent",
  dueDate: moment().format("YYYY-MM-DD"),
};

test("renders correctly", () => {
  const store = mockStore(initialState);
  renderWithRedux(<Todo todo={todo} />, store);
  expect(screen.getByRole("checkbox")).not.toBeNull();
  expect(screen.getByText("Learn React")).not.toBeNull();
  expect(screen.getByText("Urgent")).not.toBeNull();
  expect(screen.getByTestId("delete-icon")).not.toBeNull();
});

describe("todo actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  test("clicking checkbox should dispatch toggleTodoCompleted", () => {
    store.dispatch = jest.fn();
    renderWithRedux(<Todo todo={todo} />, store);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(toggleTodoCompleted());
  });
  test("clicking on delete button should show modal", () => {
    renderWithRedux(<Todo todo={todo} />, store);
    fireEvent.click(screen.getByTestId("delete-icon"));
    expect(screen.getByTestId("modal")).not.toBeNull();
  });
});
