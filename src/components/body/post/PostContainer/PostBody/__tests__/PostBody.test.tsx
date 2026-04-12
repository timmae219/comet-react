
import React from "react";
import { render, screen } from "@testing-library/react";
import PostBody from "../PostBody";
import "@testing-library/jest-dom";


describe("PostBody Component Tests", () => {
  it("renders content correctly", () => {
    const content = "<p>This is a test post body.</p>";
    render(<PostBody content={content} />);

    const postBodyElement = screen.getByTestId("post-body");
    expect(postBodyElement).toBeInTheDocument();
    expect(postBodyElement).toHaveTextContent("This is a test post body.");
  });

  it("renders empty content when no content is provided", () => {
    render(<PostBody />);

    const postBodyElement = screen.getByTestId("post-body");
    expect(postBodyElement).toBeInTheDocument();
    expect(postBodyElement).toHaveTextContent("");
  });
});