import { useReducer, useEffect } from 'react';
import * as axios from 'axios';

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                error: null,
                data: action.result
            };
        case FETCH_FAILURE:
            return { ...state, isLoading: false, isError: true, error: action.error };
        default:
            return state;
    }
}
const initState = {
    isLoading: true,
    isError: false,
    response: null,
    error: null
}

export const useGet = myUrl => {
    const [state, dispatch] = useReducer(reducer, initState);
    const fetchData = myUrl => {
        axios.get(myUrl).then(response => {
            dispatch({ type: FETCH_SUCCESS, result: response.data });
        }).catch(error => {
            dispatch({ type: FETCH_FAILURE, error: error });
        });
    }
    useEffect(() => {
        setTimeout(() => fetchData(myUrl), 1);
    }, [myUrl]);
    return state;
}

