import reducer from "./reducers";
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const logMiddleware = ({ getState } ) => (next) => (action) => {
 
    return next(action);
} 

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action);
}

const store = createStore(reducer, applyMiddleware( thunkMiddleware, stringMiddleware, logMiddleware));



export default store