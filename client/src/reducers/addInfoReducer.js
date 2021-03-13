import { GET_TAGS, GET_TAGS_SUCCESS, ADD_INFO, CREATE_TAG, CREATE_TAG_SUCCESS, CREATE_TAG_ERROR, ADD_INFO_ERROR } from "../actions/InfosAction";
import { EDIT_INFO_ERROR } from "../actions/profileAction";
import { RESET_STATE } from "../actions/resetStateAction";

const DEFAULT_STATE = { selectTags: [], selectLoading: false };

export default function info(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_TAGS:
      return { selectTags: [], selectLoading: true };
    case GET_TAGS_SUCCESS:
      return { selectTags: action.tags, selectLoading: false };
    case CREATE_TAG:
      return { selectTags: [...state.selectTags], selectLoading: true };
    case CREATE_TAG_SUCCESS:
      return { selectTags: [...state.selectTags, action.tags], selectLoading: false };
    case CREATE_TAG_ERROR:
      return { selectTags: [...state.selectTags], selectLoading: false, error: [action.error] };
    case ADD_INFO:
      return { selectTags: [...state.selectTags], selectLoading: true};
    case  ADD_INFO_ERROR:
      return { selectTags: [...state.selectTags], selectLoading: false, error: [action.error] };
    case EDIT_INFO_ERROR:
      return { selectTags: [...state.selectTags], selectLoading: false, error: action.error };
    case RESET_STATE:
      return { selectTags: [...state.selectTags], selectLoading: false };
    default:
      return state;
  }
}