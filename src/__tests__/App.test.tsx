import React from "react";
import { render, RenderResult } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "./../redux/store";

describe("Root App Component Tests", () => {
  it("renders header correctly when rendering app component", () => {
    const { getByTestId }: RenderResult = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const cometHeader: HTMLElement = getByTestId("comet-header");

    expect(cometHeader).toBeInTheDocument();
  });
});
