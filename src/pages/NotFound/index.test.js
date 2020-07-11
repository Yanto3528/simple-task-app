import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../testHelpers";
import NotFound from "./";

test("renders correctly", () => {
  renderWithRouter(<NotFound />);
  expect(screen.getByText(/Not Found/i)).not.toBeNull();
  expect(screen.getByText(/Not Exist/i)).not.toBeNull();
  expect(screen.getByRole("img")).not.toBeNull();
  expect(screen.getByRole("link")).not.toBeNull();
});
