import { combineReducers } from "redux";

import { modalReducer } from './modalReducer';
import { studentReducer } from './studentReducer';

export default combineReducers({
    students: studentReducer,
    modal: modalReducer
});