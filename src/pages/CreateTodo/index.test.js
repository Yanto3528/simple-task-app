import React from "react";
import moment from "moment";
import {
  screen,
  fireEvent,
  getByPlaceholderText,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { renderWithRedux } from "../../testHelpers";
import { initialState } from "../../utils";
import CreateTodo from "./";

const mockStore = configureStore([thunk]);

test("renders correctly", () => {
  const store = mockStore(initialState);
  renderWithRedux(<CreateTodo />, store);
  expect(screen.getByText(/Create a new/i)).not.toBeNull();
  expect(screen.getByLabelText(/Title/i)).not.toBeNull();
  expect(screen.getByLabelText(/Description/i)).not.toBeNull();
  expect(screen.getByLabelText(/Date/i)).not.toBeNull();
  expect(screen.getByLabelText(/Type/i)).not.toBeNull();
  expect(screen.getByRole("button", { name: /Create/i })).not.toBeNull();
});

describe("Submit form", () => {
  describe("With form value", () => {
    let store;
    beforeEach(() => {
      store = mockStore(initialState);
    });
    test("dispatch addTodo function to store", () => {
      store.dispatch = jest.fn();
      const historyMock = { push: jest.fn() };
      renderWithRedux(<CreateTodo history={historyMock} />, store);
      userEvent.type(
        screen.getByPlaceholderText(/Learn React/i),
        "Learn React"
      );
      userEvent.type(
        screen.getByPlaceholderText(/Learning how to/i),
        "Create a website"
      );
      fireEvent.change(screen.getByDisplayValue(/2020/i), {
        target: { value: moment().format("YYYY-MM-DD") },
      });
      fireEvent.change(screen.getByDisplayValue(/Select/i), {
        target: { value: "Important" },
      });
      fireEvent.submit(screen.getByTestId("form"));
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(historyMock.push).toHaveBeenCalledTimes(1);
    });
  });
  describe("With no value", () => {
    let store;
    beforeEach(() => {
      store = mockStore(initialState);
    });
    test("display error message when there is no value in input 'title'", () => {
      store.dispatch = jest.fn();
      renderWithRedux(<CreateTodo />, store);
      userEvent.type(
        screen.getByPlaceholderText(/Learning how to/i),
        "Create a website"
      );
      fireEvent.change(screen.getByLabelText(/Date/i), {
        target: { value: moment().format("YYYY-MM-DD") },
      });
      fireEvent.change(screen.getByLabelText(/Type/i), {
        target: { value: "Important" },
      });
      fireEvent.submit(screen.getByTestId("form"));
      expect(store.dispatch).toHaveBeenCalledTimes(0);
      expect(screen.getByText(/Title is required/i)).not.toBeNull();
    });
    test("display error message when there is no value in input 'description'", () => {
      store.dispatch = jest.fn();
      renderWithRedux(<CreateTodo />, store);
      userEvent.type(
        screen.getByPlaceholderText(/Learn React.../i),
        "Create a website"
      );
      fireEvent.change(screen.getByLabelText(/Date/i), {
        target: { value: moment().format("YYYY-MM-DD") },
      });
      fireEvent.change(screen.getByLabelText(/Type/i), {
        target: { value: "Important" },
      });
      fireEvent.submit(screen.getByTestId("form"));
      expect(store.dispatch).toHaveBeenCalledTimes(0);
      expect(screen.getByText(/Description is required/i)).not.toBeNull();
    });
    test("display error message when there is no value in input 'dueDate'", () => {
      store.dispatch = jest.fn();
      renderWithRedux(<CreateTodo />, store);
      userEvent.type(
        screen.getByPlaceholderText(/Learn React.../i),
        "Create a website"
      );
      userEvent.type(
        screen.getByPlaceholderText(/Learning how to/i),
        "Create a website"
      );
      fireEvent.change(screen.getByLabelText(/Date/i), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByLabelText(/Type/i), {
        target: { value: "Important" },
      });
      fireEvent.submit(screen.getByTestId("form"));
      expect(store.dispatch).toHaveBeenCalledTimes(0);
      expect(screen.getByText(/Due Date is required/i)).not.toBeNull();
    });
    test("display error message when there is no value in select 'type'", () => {
      store.dispatch = jest.fn();
      renderWithRedux(<CreateTodo />, store);
      userEvent.type(
        screen.getByPlaceholderText(/Learn React.../i),
        "Create a website"
      );
      userEvent.type(
        screen.getByPlaceholderText(/Learning how to/i),
        "Create a website"
      );
      fireEvent.change(screen.getByLabelText(/Date/i), {
        target: { value: moment().format("YYYY-MM-DD") },
      });
      fireEvent.change(screen.getByLabelText(/Type/i), {
        target: { value: "" },
      });
      fireEvent.submit(screen.getByTestId("form"));
      expect(store.dispatch).toHaveBeenCalledTimes(0);
      expect(screen.getByText(/Type is required/i)).not.toBeNull();
    });
  });
});
