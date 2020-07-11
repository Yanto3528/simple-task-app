import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

export const renderWithRouter = (component) => {
  return render(<Router>{component}</Router>);
};

export const renderWithRedux = (component, store) => {
  return render(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );
};
