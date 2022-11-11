import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import { expect } from "@open-wc/testing";

describe("a test", () => {
  it("passes", () => {
    render(<h1>My Header</h1>);

    screen.debug();

    expect(1 + 1).to.equal(2);
  });
});
