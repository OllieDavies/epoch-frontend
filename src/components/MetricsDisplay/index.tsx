import * as React from "react";
import { useEffect } from "react";
import useApi from "../useApi";
import Loading from "../Loading";

const MetricsDispaly: React.FC = () => {
  const { isLoading, response, error, fetch } = useApi("/metrics");

  // Fetch on mount and start a timer to poll
  useEffect(() => {
    fetch();
    const timer = setInterval(fetch, 3000);
    return () => clearInterval(timer);
  }, []);

  if (error) return <p>{error.response?.statusText}</p>;

  return (
    <>
      <h1>Metrics {isLoading && <Loading />}</h1>
      <code>
        <pre>{response?.data}</pre>
      </code>
    </>
  );
};
export default MetricsDispaly;
