import * as React from "react";
import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

const TimeDisplay: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState<AxiosResponse | undefined>(
    undefined
  );
  const [error, setError] = useState<AxiosError | undefined>(undefined);

  const fetch = () => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/v1/time", {
        headers: { Authorization: "mysecrettoken" },
      })
      .then(setResponse)
      .catch(setError)
      .finally(() => setLoading(false));
  };

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
