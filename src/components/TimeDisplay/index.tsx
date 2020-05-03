import * as React from "react";
import { useEffect } from "react";
import useApi from "../useApi";

const TimeDisplay: React.FC = () => {
  const { isLoading, response, error, fetch } = useApi("/api/v1/time");

  // Fetch on mount and start a timer to poll
  useEffect(() => {
    fetch();
    const timer = setInterval(fetch, 3000);
    return () => clearInterval(timer);
  }, []);

  if (isLoading) return <p data-testid="timedisplay loading">Loading</p>;

  if (error) return <p>{error.response?.statusText}</p>;

  return <p>{response?.data.epoch}</p>;
};
export default TimeDisplay;
