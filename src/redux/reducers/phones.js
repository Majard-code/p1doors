import APIs from "../../api/apis";

const initState = {
    data: null,
    error: null,
    isFetching: false
};

const PHONES_FETCH_INIT = 'PHONES_FETCH_INIT';
const PHONES_FETCH_SUCCESS = 'PHONES_FETCH_SUCCESS';
const PHONES_FETCH_FAILURE = 'PHONES_FETCH_FAILURE';

const phones = (state = initState, action) => {
    switch (action.type) {
        case PHONES_FETCH_INIT:
            return {
                ...state,
                isFetching: true
            }
        case PHONES_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            }
        case PHONES_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
};

const phonesFetchInit = () => ({ type: PHONES_FETCH_INIT });
const phonesFetchSuccess = (data) => ({ type: PHONES_FETCH_SUCCESS, payload: data});
const phonesFetchFailure = (error) => ({ type: PHONES_FETCH_FAILURE, payload: error});

export const fetchPhones = (didCancel) => async (dispatch) => {
    dispatch(phonesFetchInit());
    try {
        const result = await APIs.requestPhones();
        if (!didCancel) dispatch(phonesFetchSuccess(result.data));
    } catch(error) {
        if (!didCancel) dispatch(phonesFetchFailure(error));
    }
}

export default phones;