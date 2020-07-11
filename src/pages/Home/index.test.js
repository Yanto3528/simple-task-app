import React from "react";
import { renderWithRedux } from "../../testHelpers";
import configureStore from "redux-mock-store";
import { initialState } from "../../utils";
import { render } from "@testing-library/react";
import Home from "./";

const mockStore = configureStore([]);

test("renders correctly", () => {
  const store = mockStore(initialState);
  const { asFragment } = renderWithRedux(<Home />, store);
  expect(asFragment).toMatchSnapshot();
});
