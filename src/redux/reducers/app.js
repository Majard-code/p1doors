import store from "../store";
import { fetchPhones } from "./phones";
import { fetchDoors } from "./doors";
import { fetchCalc } from "./calc";

const initState = {
    isReady: false
};

const ALL_FETCH_SUCCESS = 'ALL_FETCH_SUCCESS';
const ALL_FETCH_FAILURE = 'ALL_FETCH_FAILURE';

const app = (state = initState, action) => {
    switch(action.type){
        case ALL_FETCH_SUCCESS:
            return {
                ...state,
                isReady: true
            }
        case ALL_FETCH_FAILURE:
            return {
                ...state,
                isReady: false
            } 
        default:
            return state;
    };
};

const allFetchSuccess = () => ({ type: ALL_FETCH_SUCCESS });
const allFetchFailure = () => ({ type: ALL_FETCH_FAILURE });

export const fetchAll = (didCancel) => (dispatch) => {

    Promise.all([ dispatch(fetchPhones(didCancel)), dispatch(fetchDoors(didCancel)), dispatch(fetchCalc(didCancel)) ]).then(() => {
        if (store.getState().phones.data && store.getState().doors.data && store.getState().calc.data && store.getState().comments.data){
            dispatch(allFetchSuccess());
        } else {
            dispatch(allFetchFailure());
        }
    });
};

export default app;