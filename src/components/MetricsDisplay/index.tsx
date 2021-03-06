import * as React from "react";
import { useEffect } from "react";
import useApi from "../useApi";
import Loading from "../Loading";

const MetricsDispaly: React.FC = () => {
  const { isLoading, response, error, fetch } = useApi("/metrics");

  // Fetch on mount and start a timer to poll
  useEffect(() => {
    fetch();
    const timer = setInterval(fetch, 30000);
    return () => clearInterval(timer);
  }, [fetch]);

  return (
    <>
      <h1>Metrics {isLoading && <Loading />}</h1>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <code>
          <pre>{response?.data}</pre>
        </code>
      )}
    </>
  );
};
export default MetricsDispaly;
