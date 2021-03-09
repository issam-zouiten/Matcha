import { connectRouter } from "connected-react-router";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import userReducer from './userReducer';
import addInfoReducer from './addInfoReducer';
import imagesReducer from './imagesReducers';
import resetPasswordReducer from "./resetPReducer";


const combinedReducer = (history)=> combineReducers({
    "router" : connectRouter(history),
    "register" : registerReducer,
    "login": loginReducer,
    "user" : userReducer,
    "images" : imagesReducer,
    "addInfo" : addInfoReducer,
    "resetPassword": resetPasswordReducer,
    form
});
export default combinedReducer;