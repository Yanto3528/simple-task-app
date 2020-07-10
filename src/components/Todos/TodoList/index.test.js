import React from "react";
import { screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { renderWithRedux } from "../../../testHelpers";
import {
  initialState,
  initialStateWithFiltered,
  emptyState,
} from "../../../utils";
import TodoList from "./";

const mockStore = configureStore([]);

describe("renders", () => {
  describe("when there are todos or filtered", () => {
    test("render list of todo when there are todo state", () => {
      const store = mockStore(initialState);
      renderWithRedux(<TodoList />, store);
      expect(screen.getAllByTestId("todo").length).toBe(2);
    });
    test("render list of filtered todo when there are filtered state", () => {
      const store = mockStore(initialStateWithFiltered);
      renderWithRedux(<TodoList />, store);
      expect(screen.getAllByTestId("todo").length).toBe(1);
    });
  });
  describe("when there are no todos or filtered", () => {
    test("render 'There is no todos' text when there are no todos", () => {
      const store = mockStore(emptyState);
      renderWithRedux(<TodoList />, store);
      expect(screen.getByText(/There is no todos/i)).not.toBeNull();
    });
    test("render 'no todos found' text when there are no filtered", () => {
      const store = mockStore({ todo: { todos: ["a"], filtered: [] } });
      renderWithRedux(<TodoList />, store);
      expect(screen.getByText(/No todos found/i)).not.toBeNull();
    });
  });
});
