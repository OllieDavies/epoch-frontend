import React from "react";
import MetricsDisplay from "./index";

describe("<MetricsDisplay />", () => {
  test("matches snapshot", () => {
    expect(<MetricsDisplay />).toMatchSnapshot();
  });
  test.todo("displays the loading component");
  test.todo("displays the api response in the code block");
  test.todo("displays http status error if response is not ok");
});
