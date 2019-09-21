import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import app from './reducers/app';
import popup from './reducers/popup';
import mobmenu from './reducers/mobmenu';
import phones from './reducers/phones';
import doors from './reducers/doors';
import calc from './reducers/calc';
import comments from './reducers/comments';

const reducers = combineReducers({
    app,
    popup,
    mobmenu,
    phones,
    doors,
    calc,
    comments,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;