// example btn test
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./index";

describe("Button", () => {
  it("should render", () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeDefined();
  });
});
