import receipeReducer from './receipes/reducer';
import {combineReducers} from "redux";

const appReducers = combineReducers({
    receipes: receipeReducer
});

export default appReducers;