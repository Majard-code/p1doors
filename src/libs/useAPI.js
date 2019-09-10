import { useReducer, useEffect } from 'react';
import * as axios from 'axios';

const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';


const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                status: 'LOADING'
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                status: 'SUCCESS'
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                status: 'FAILURE'
            };
        default:
            return state;
    }
}

export const useGet = (initUrl, initParams = {params: {}}) => {
    const [state, dispatch] = useReducer(reducer, {
        url: initUrl,
        params: initParams,
        data: null,
        error: null,
        status: 'INITIAL'
    });

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            dispatch({ type: FETCH_START });
            try {
                const result = await axios.get(state.url, { params : state.params });
                if (!didCancel) {
                    dispatch({ type: FETCH_SUCCESS, payload: result.data });
                }        
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: FETCH_FAILURE, payload: error })
                }        
            }
        };
        fetchData();
        return () => {didCancel = true};
    }, [state.url, state.params]);
    return state;
}