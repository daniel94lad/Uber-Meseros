import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import userRegisterReducer from './userRegisterReducer';
import userLandingPageReducer from './userLandingPageReducer';
import profileUserReducer from './profileUserReducer';
import createEventReducer from './createEventReducer';
import personalReviewReducer from './personalReviewReducer';

export default combineReducers({
    loginReducer,
    userRegisterReducer,
    userLandingPageReducer,
    profileUserReducer,
    createEventReducer,
    personalReviewReducer

})