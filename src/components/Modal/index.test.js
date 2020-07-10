import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./";

test("render withour error", () => {
  render(<Modal title="Delete" content="Hello" />);
  expect(screen.queryByTestId("modal")).not.toBeNull();
  expect(screen.getByText("Delete")).not.toBeNull();
  expect(screen.getByText("Hello")).not.toBeNull();
});

describe("Modal actions", () => {
  describe("click on close function", () => {
    let onClose;
    beforeEach(() => {
      onClose = jest.fn();
    });
    test("click on backdrop", () => {
      render(<Modal onClose={onClose} />);
      fireEvent.click(screen.getByTestId("modal"));

      expect(onClose).toHaveBeenCalledTimes(1);
    });
    test("click on close icon", () => {
      render(<Modal onClose={onClose} />);
      fireEvent.click(screen.getByTestId("close-icon"));
      expect(onClose).toHaveBeenCalledTimes(1);
    });
    test("click on cancel button", () => {
      render(<Modal onClose={onClose} />);
      fireEvent.click(screen.getByText("Cancel"));
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
  describe("confirm action", () => {
    test("click on confirm button", () => {
      const onConfirm = jest.fn();
      render(<Modal onConfirm={onConfirm} />);
      fireEvent.submit(screen.getByTestId("submit"));
      expect(onConfirm).toHaveBeenCalledTimes(1);
    });
  });
});
