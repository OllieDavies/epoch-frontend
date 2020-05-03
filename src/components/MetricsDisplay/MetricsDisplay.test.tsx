import React from "react";
import { render } from "@testing-library/react";
import MetricsDisplay from "./";

describe("<MetricsDisplay />", () => {
  test("displays loading when first loaded", () => {
    const { getByTestId } = render(<MetricsDisplay />);
    expect(() => getByTestId("metricsdisplay loading")).not.toThrow();
  });
});
