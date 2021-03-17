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
      return { ...state, marker: action.localisation.marker, lat: action.localisation.lat, lng: action.localisation.lng }
    case INC_STEP_SUCCESS:
      return { ...state, step:  state.step + 1  }
    case DEC_STEP:
      return { ...state, step:  state.step - 1 }
    // case DEC_STEP:
    //   return { ...state, step:  state.step - 1 }
    default:
      return state;
  }
}