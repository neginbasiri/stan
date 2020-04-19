import { useState, useEffect } from "react";

const SAMPLE_DATA_URL = "feed/sample.json";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);

      await fetch(SAMPLE_DATA_URL)
        .then(res => res.json())
        .then(({entries}) => {

          setResponse(entries);
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    };
    doFetch();
  }, []);

  return { response, error, loading };
};
export default useFetch;
