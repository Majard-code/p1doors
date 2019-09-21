import APIs from "../../api/apis";

const initState = {
    data: null,
    dataChoice: null,
    error: null,
    isFetching: false
};

const CALC_FETCH_INIT = 'CALC_FETCH_INIT';
const CALC_FETCH_SUCCESS = 'CALC_FETCH_SUCCESS';
const CALC_FETCH_FAILURE = 'CALC_FETCH_FAILURE';

const calc = (state = initState, action) => {
    switch (action.type) {
        case CALC_FETCH_INIT:
            return {
                ...state,
                isFetching: true
            }
        case CALC_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            }
        case CALC_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
};

const calcFetchInit = () => ({ type: CALC_FETCH_INIT });
const calcFetchSuccess = (data) => ({ type: CALC_FETCH_SUCCESS, payload: data});
const calcFetchFailure = (error) => ({ type: CALC_FETCH_FAILURE, payload: error});

export const fetchCalc = (didCancel) => async (dispatch) => {
    dispatch(calcFetchInit());
    try {
        const result = await APIs.requestCalc();
        if (!didCancel) dispatch(calcFetchSuccess(result.data));
    } catch(error) {
        if (!didCancel) dispatch(calcFetchFailure(error));
    }
}

export default calc;