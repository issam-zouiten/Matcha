export const GET_TAGS = "GET_TAGS";
export const GET_TAGS_SUCCESS = "GET_TAGS_SUCCESS";
export const ADD_INFO = "ADD_INFO";
export const ADD_INFO_SUCCESS = "ADD_INFO_SUCCESS";
export const ADD_INFO_ERROR = "ADD_INFO_ERROR";
export const GET_STEP_3_LOCATION = "GET_STEP_3_LOCATION";
export const STEP_3_LOCATION = "STEP_3_LOCATION"
export const STEP_3_LOCATION_SUCCESS = "STEP_3_LOCATION_SUCCESS";
export const CREATE_TAG = "CREATE_TAG";
export const CREATE_TAG_SUCCESS = "CREATE_TAG_SUCCESS";
export const CREATE_TAG_ERROR = "createTagError";

export const getTags = () => ({
  type: GET_TAGS
});

export const getTagsSuccess = (tags) => ({
  type: GET_TAGS_SUCCESS,
  tags
});

export const step1info = (data, id) => ({
  type: ADD_INFO,
  data: data,
  id: id,
});

export const step1infoSuccess = (info) => ({
  type: ADD_INFO_SUCCESS,
  info: info
});

export const step1infoError = (error) => ({
  type: ADD_INFO_ERROR,
  error
});

export const get_location = () => ({
  type: GET_STEP_3_LOCATION,
});

export const add_Location = (localisation) => ({
  type: STEP_3_LOCATION,
  localisation
});

export const add_LocationSuccess = (localisation) => ({
  type: STEP_3_LOCATION_SUCCESS,
  localisation
});

export const createTag = (tags) => ({
  type: CREATE_TAG,
  data: { value: tags, label: tags }
});

export const createTagSuccess = (tags) => ({
  type: CREATE_TAG_SUCCESS,
  tags
});

export const createTagError = (error) => ({
  type: CREATE_TAG_ERROR,
  error
});