import React from "react";
import TimeDisplay from "./index";

describe("<TimeDisplay />", () => {
  test("matches snapshot", () => {
    expect(<TimeDisplay />).toMatchSnapshot();
  });
  test.todo("displays the loading component");
  test.todo("displays the epoch seconds api response");
  test.todo("displays http status error if response is not ok");
});
