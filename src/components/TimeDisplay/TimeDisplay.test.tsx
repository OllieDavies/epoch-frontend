import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TimeDisplay from "./";

describe("<TimeDisplay />", () => {
  test("displays loading when first loaded", () => {
    const { getByTestId } = render(<TimeDisplay />);
    expect(() => getByTestId("timedisplay loading")).not.toThrow();
  });
});
