import APIs from "../../api/apis";

const initState = {
    data: null,
    error: null,
    isFetching: false
};

const DOORS_FETCH_INIT = 'DOORS_FETCH_INIT';
const DOORS_FETCH_FAILURE = 'DOORS_FETCH_FAILURE';
const DOORS_FETCH_SUCCESS = 'DOORS_FETCH_SUCCESS';

const doors = (state = initState, action) => {
    switch (action.type) {
        case DOORS_FETCH_INIT:
            return {
                ...state,
                isFetching: true
            }
        case DOORS_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            }
        case DOORS_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
};

const doorsFetchInit = () => ({ type: DOORS_FETCH_INIT });
const doorsFetchSuccess = (data) => ({ type: DOORS_FETCH_SUCCESS, payload: data});
const doorsFetchFailure = (error) => ({ type: DOORS_FETCH_FAILURE, payload: error});

export const fetchDoors = (didCancel) => async (dispatch) => {
    dispatch(doorsFetchInit());
    try {
        const result = await APIs.requestDoors();
        if (!didCancel) dispatch(doorsFetchSuccess(result.data));
    } catch(error) {
        if (!didCancel) dispatch(doorsFetchFailure(error));
    }
}

export default doors;