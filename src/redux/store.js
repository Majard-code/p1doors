import { createStore, combineReducers } from "redux";
import phones from './reducers/phones';

let reducers = combineReducers({
    phones,
    door,
    calc,
    comments
});

const store = createStore(reducers);

export default store;