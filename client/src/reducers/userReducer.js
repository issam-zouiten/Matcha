import {UPDATE_USER_SUCCESS} from "../actions/userAction";
import { CLEAR_USER_INFORMATION } from '../actions/logoutAction';
import { DEC_STEPPER ,INC_STEPPER_SUCCESS} from "../actions/stepperAction";
import { GET_STEP_3_LOCATION} from "../actions/InfosAction";

export default function (state = null, action) {
    switch (action.type) {
      case UPDATE_USER_SUCCESS:
        return action.data;
      case CLEAR_USER_INFORMATION:
        return null;
      case DEC_STEPPER:
        return {...state}
      case INC_STEPPER_SUCCESS:
        return {...state}
      case GET_STEP_3_LOCATION:
        return {...state, marker: action.localisation.marker ,lat: action.localisation.lat, long: action.localisation.lng}
      default:
        return state;
    }
}