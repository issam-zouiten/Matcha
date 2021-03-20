import { connectRouter } from "connected-react-router";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import userReducer from './userReducer';
import addInfoReducer from './addInfoReducer';
import imagesReducer from './imagesReducers';
import resetPasswordReducer from "./resetPReducer";
import chat from './chatReducer';
import notif from './notifReducer';
import viewProfileList from './viewProfileList';
import blockList from './blockList';
import likeList from './likeList';
import likedByList from './likedByList';
import usersReducer from './usersReducer';


const combinedReducer = (history)=> combineReducers({
    "router" : connectRouter(history),
    "register" : registerReducer,
    "login": loginReducer,
    "user" : userReducer,
    "images" : imagesReducer,
    "addInfo" : addInfoReducer,
    "resetPassword": resetPasswordReducer,
    "chat": chat,
    "notif": notif, 
    "blockList" : blockList,
    "likeList" : likeList,
    "likedByList": likedByList,
    "viewProfileList": viewProfileList,
    "users" : usersReducer,
    form
});
export default combinedReducer;