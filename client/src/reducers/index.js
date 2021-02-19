import { connectRouter } from "connected-react-router";
import registerReducer from "./registerReducer";
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";


const combinedReducer = (history)=> combineReducers({
    "router" : connectRouter(history),
    "register" : registerReducer,
    form
});
export default combinedReducer;