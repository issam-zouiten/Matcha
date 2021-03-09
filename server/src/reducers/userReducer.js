import {UPDATE_USER_SUCCESS} from "../actions/userAction";
import { CLEAR_USER_INFORMATION } from '../actions/logoutAction';
import { STEP_3_LOCATION} from "../actions/InfosAction";

export default function usr(state = null, action) {
    switch (action.type) {
      case UPDATE_USER_SUCCESS:
        return action.data;
      case CLEAR_USER_INFORMATION:
        return null;
      case STEP_3_LOCATION:
        return {...state, marker: action.localisation.marker ,lat: action.localisation.lat, long: action.localisation.lng}
      default:
        return state;
    }
}