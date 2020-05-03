import React from "react";
import TimeDifferenceDisplay from "./index";

describe("TimeDifferenceDisplay",()=> {
  test("matches snapshot",() =>{
    expect(<TimeDifferenceDisplay startEpoch={1000000} />).toMatchSnapshot()
  })
  test.todo("converts the number of seconds into the correct HH:mm:ss format")
  test.todo("updates every second")
})