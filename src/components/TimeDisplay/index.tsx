import * as React from "react";
import { useEffect } from "react";
import useApi from "../useApi";
import Loading from "../Loading";
import TimeDifferenceDisplay from "../TimeDifferenceDisplay";

const TimeDisplay: React.FC = () => {
  const { isLoading, response, error, fetch } = useApi("/api/v1/time");

  // Fetch on mount and start a timer to poll
  useEffect(() => {
    fetch();
    const timer = setInterval(fetch, 30000);
    return () => clearInterval(timer);
  }, [fetch]);

  if (error) return <p>{error.response?.statusText}</p>;

  return (
    <>
      <h1>Current Time {isLoading && <Loading />}</h1>
      <p>
        Last Response: <code>{response?.data.epoch}</code>
      </p>
      <p>
        Time since last response:{" "}
        <TimeDifferenceDisplay startEpoch={response?.data.epoch} />
      </p>
    </>
  );
};
export default TimeDisplay;
