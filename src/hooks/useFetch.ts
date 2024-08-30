import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    setLoadingState();

    const resp = await fetch(url);
    const data = await resp.json();

    if (!data.data && data.meta.code === 400) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: { code: data.meta.code, message: data.meta.message },
      });
      return;
    }

    setState({
      data: data.data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
