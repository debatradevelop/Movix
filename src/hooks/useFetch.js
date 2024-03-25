import { useState, useEffect } from "react";
import fetchDataFromApi from "../utils/api";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    try {
      setLoading("Loading.....");
      setError(null);

      fetchDataFromApi(url).then((res) => {
        setLoading(false);
        setData(res);
      });
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, [url]);
  return { data, loading, error };
}
