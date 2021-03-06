import {
  GET_TAGS,
  GET_TAGS_SUCCESS,
  STEP_1_INFO_ERROR,
} from "../actions/InfosAction";
import {EDIT_INFO_ERROR} from "../actions/profileAction";
import {RESET_STATE} from "../actions/resetStateAction";

const DEFAULT_STATE =  { selectOptions: [], selectLoading: false };

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_TAGS:
      return { selectOptions: [], selectLoading: true };
    case GET_TAGS_SUCCESS:
      return { selectOptions: action.options, selectLoading: false };
    case STEP_1_INFO_ERROR:
      return { selectOptions: [...state.selectOptions] , selectLoading: false , error: [action.error] };
    case EDIT_INFO_ERROR:
        return { selectOptions: [...state.selectOptions] , selectLoading: false , error: action.error };
    case RESET_STATE:
      return {selectOptions: [...state.selectOptions] , selectLoading: false};
    default:
      return state;
  }
}