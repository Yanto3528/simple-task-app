import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { filterTodo, clearFilter, filterByType } from "../../redux/actions";
import { renderWithRedux } from "../../testHelpers";
import SearchBar from "./";
import { initialState } from "../../utils";

const mockStore = configureStore([]);

test("render without error", () => {
  const store = mockStore(initialState);
  renderWithRedux(<SearchBar />, store);
  expect(screen.getByPlaceholderText(/Search/i)).not.toBeNull();
  expect(screen.getByDisplayValue(/Filter/i)).not.toBeNull();
});

describe("on change event", () => {
  describe("with value", () => {
    let store;
    beforeEach(() => {
      store = mockStore(initialState);
    });
    test("search todo by typing text", () => {
      store.dispatch = jest.fn();
      renderWithRedux(<SearchBar />, store);
      userEvent.type(screen.getByPlaceholderText(/Search/i), "do");
      expect(store.dispatch).toHaveBeenCalledTimes(2);
      expect(store.dispatch).toHaveBeenCalledWith(filterTodo("do"));
    });
    test("click on select filter", () => {
      store.dispatch = jest.fn();
      renderWithRedux(<SearchBar />, store);
      fireEvent.change(screen.getByDisplayValue(/Filter/i), {
        target: { value: "Important" },
      });
      expect(store.dispatch).toHaveBeenCalledWith(filterByType("Important"));
    });
  });
  describe("with no value, dispatch clearFilter()", () => {
    let store;
    beforeEach(() => {
      store = mockStore(initialState);
    });
    test("no input value", () => {
      store.dispatch = jest.fn();
      renderWithRedux(<SearchBar />, store);
      fireEvent.change(screen.getByPlaceholderText(/Search/i), {
        target: { value: "a" },
      });
      fireEvent.change(screen.getByPlaceholderText(/Search/i), {
        target: { value: "" },
      });
      expect(store.dispatch).toHaveBeenCalledTimes(2);
      expect(store.dispatch).toHaveBeenCalledWith(clearFilter());
    });
    test("no select value", () => {
      store.dispatch = jest.fn();
      renderWithRedux(<SearchBar />, store);
      fireEvent.change(screen.getByDisplayValue(/Filter/i), {
        target: { value: "" },
      });
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(clearFilter());
    });
  });
});
