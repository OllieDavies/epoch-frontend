import { useState, useCallback } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
});

export default function useApi(path: string) {
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState<AxiosResponse | undefined>(
    undefined
  );
  const [error, setError] = useState<AxiosError | undefined>(undefined);

  const fetch = useCallback(() => {
    setLoading(true);
    api
      .get(path)
      .then(setResponse)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [path]);

  return {
    isLoading,
    response,
    error,
    fetch,
  };
}
