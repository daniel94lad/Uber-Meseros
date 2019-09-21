import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import userRegisterReducer from './userRegisterReducer';
import userLandingPageReducer from './userLandingPageReducer';

export default combineReducers({
    loginReducer,
    userRegisterReducer,
    userLandingPageReducer

})