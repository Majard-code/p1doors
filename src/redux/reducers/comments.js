import APIs from "../../api/apis";

const initState = {
    data: [],
    page: 1,
    error: null,
    isFetching: false
};

const COMMENTS_FETCH_INIT = 'COMMENTS_FETCH_INIT';
const COMMENTS_FETCH_SUCCESS = 'COMMENTS_FETCH_SUCCESS';
const COMMENTS_FETCH_FAILURE = 'COMMENTS_FETCH_FAILURE';
const COMMENTS_NEXT_PAGE = 'COMMENTS_NEXT_PAGE';

const comments = (state = initState, action) => {
    switch (action.type) {
        case COMMENTS_FETCH_INIT:
            return {
                ...state,
                isFetching: true
            }
        case COMMENTS_FETCH_SUCCESS:
            return {
                ...state,
                data: state.data.concat(action.payload),
                isFetching: false
            }
        case COMMENTS_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case COMMENTS_NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        default:
            return state;
    }
};

const commentsFetchInit = () => ({ type: COMMENTS_FETCH_INIT });
const commentsFetchSuccess = (data) => ({ type: COMMENTS_FETCH_SUCCESS, payload: data });
const commentsFetchFailure = (error) => ({ type: COMMENTS_FETCH_FAILURE, payload: error });
export const commentsNextPage = () => ({ type: COMMENTS_NEXT_PAGE });

export const fetchComments = (didCancel, numInPage, page) => async (dispatch) => {
    dispatch(commentsFetchInit());
    try {
        const result = await APIs.requestComments(numInPage, page);
        if (!didCancel) dispatch(commentsFetchSuccess(result.data));
    } catch (error) {
        if (!didCancel) dispatch(commentsFetchFailure(error));
    }
}

export default comments;