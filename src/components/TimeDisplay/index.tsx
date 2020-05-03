import * as React from "react";
import { useEffect } from "react";
import useApi from "../useApi";
import Loading from "../Loading";

const TimeDisplay: React.FC = () => {
  const { isLoading, response, error, fetch } = useApi("/api/v1/time");

  // Fetch on mount and start a timer to poll
  useEffect(() => {
    fetch();
    const timer = setInterval(fetch, 3000);
    return () => clearInterval(timer);
  }, []);

  if (error) return <p>{error.response?.statusText}</p>;

  return (
    <>
      <h1>Current Time {isLoading && <Loading />}</h1>
      <p>{response?.data.epoch}</p>
    </>
  );
};
export default TimeDisplay;
