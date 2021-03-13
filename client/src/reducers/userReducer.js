import { UPDATE_USER_SUCCESS } from "../actions/userAction";
import { CLEAR_USER_INFORMATION } from '../actions/logoutAction';
import { STEP_3_LOCATION_SUCCESS } from "../actions/InfosAction";
import { DEC_STEP, INC_STEP_SUCCESS } from "../actions/stepAction";

export default function usr(state = null, action) {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return action.data;
    case CLEAR_USER_INFORMATION:
      return null;
    case STEP_3_LOCATION_SUCCESS:
      return { ...state, marker: action.localisation.marker, lat: action.localisation.lat, long: action.localisation.long }
    case INC_STEP_SUCCESS:
      return { ...state, step: (state.step + 1 < 3) ? state.step + 1 : 2 }
    case DEC_STEP:
      return { ...state, step: (state.step - 1 >= 0) ? state.step - 1 : 0 }
    default:
      return state;
  }
}