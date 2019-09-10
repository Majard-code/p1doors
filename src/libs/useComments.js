import { useReducer, useEffect } from 'react';
import { SHOW_MORE_COMMENTS } from './actions1';
import axios from 'axios';

const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_MORE_COMMENTS:
            return { ...state,
                page: state.page + 1            
            }
        case FETCH_START:
            return {
                ...state,
                status: 'LOADING'
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                data: state.data.concat(action.payload),
                status: 'SUCCESS'
            }

        default:
            return state;
    };
};

export const useComments = (firstComments) => {
    const [state, dispatch] = useReducer(reducer, {
        data: firstComments,
        page: 1,
        status: 'INITIAL'
    });
    console.log(state);

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            dispatch({ type: FETCH_START });
            try {
                const result = await axios.get(
                    `http://armada.bestdoorshop.ru/api/1.0/comments.php`,
                    {
                        params: {
                            numInPage: 2,
                            page: state.page
                        }
                    }
                );
                if (!didCancel) {
                    dispatch({ type: FETCH_SUCCESS, payload: result.data });
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: FETCH_FAILURE, payload: error })
                }
            }
        };
        if (state.page > 1) fetchData();
        return () => { didCancel = true };
    }, [state.page]);













    return [state, dispatch];
};