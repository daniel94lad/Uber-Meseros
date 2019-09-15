import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import loginRegisterReducer from './loginRegisterReducer';
// import pinterestReducer from './pinterestReducer';

export default combineReducers({
    loginReducer,
    loginRegisterReducer
    // pinterestReducer

})