import axios from 'axios';
import { useReducer, useState, useEffect, useCallback, useRef } from 'react';

const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const reducer = (data, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...data, isLoading: true, isError: false, error: null };
    case FETCH_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        error: null,
        response: action.result
      };
    case FETCH_FAILURE:
      return { ...data, isLoading: false, isError: true, error: action.error };
    default:
      return data;
  }
}

export const useGet = initialUrl => {
    console.log('run');
  const [url, setUrl] = useState(initialUrl);

  const [data, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    response: null,
    error: null
  });
  useEffect(() => {
      debugger;
    let didCancel = false;

    const fetchData = async () => {
     dispatch({ type: FETCH_INIT });

      try {
        if (url !== null) {
          const result = await axios.get(url);

          if (!didCancel) {
            dispatch({ type: FETCH_SUCCESS, result });
          }
        }
      } catch (error) {
        const e = error
        if (!didCancel) {
          dispatch({ type: FETCH_FAILURE, error: e });
        }
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    }
  }, [url])
  return [data];
}

const useApi = (url, method) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    response: null,
    error: null
  });

  const isUnmonted = useRef();

  useEffect(() => {
    isUnmonted.current = false;
    return function() {
      isUnmonted.current = true;
    }
  }, []);

  const doRequest = useCallback(
    payload => {
      const fetchData = async () => {
        dispatch({ type: FETCH_INIT });

        try {
          const result = await axios[method](url, payload);

          if (!isUnmonted.current) {
            dispatch({ type: FETCH_SUCCESS, result });
          }
        } catch (error) {
          if (!isUnmonted.current) {
            dispatch({ type: FETCH_FAILURE, error });
          }
        }
      }

      fetchData();
    }, [method, url]);

  return [state, doRequest];
}

export const usePost = url => {
  return useApi(url, 'post');
}

export const usePut = url => {
  return useApi(url, 'put');
}

export const useDelete = url => {
  return useApi(url, 'delete');
}