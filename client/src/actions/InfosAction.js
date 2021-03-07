export const GET_TAGS = "GET_TAGS";
export const GET_TAGS_SUCCESS = "GET_TAGS_SUCCESS";
export const STEP_1_INFO = "STEP_1_INFO";
export const STEP_1_INFO_SUCCESS = "ADD_INFO_SUCCESS";
export const STEP_1_INFO_ERROR = "ADD_INFO_ERROR";
export const GET_STEP_3_LOCATION = "GET_STEP_3_LOCATION";
export const STEP_3_LOCATION = "STEP_3_LOCATION"
export const STEP_3_LOCATION_SUCCESS = "STEP_3_LOCATION_SUCCESS";

export const getTags= () => ({
  "type": GET_TAGS
});

export const getTagsSuccess = (options) => ({
    "type": GET_TAGS_SUCCESS,
    options
});

export const step1info = (data, id) => ({
  "type": STEP_1_INFO,
  "data": data,
  "id": id,
});

export const step1infoSuccess = (info) => ({
  "type": STEP_1_INFO_SUCCESS,
  "info": info
});

export const step1infoError = (error) => ({             
  "type": STEP_1_INFO_ERROR,
  error
});

export const get_location = () => ({
  "type": GET_STEP_3_LOCATION,
});

export const add_Location = (localisation) => ({
  "type": STEP_3_LOCATION,
  localisation
});

export const add_LocationSuccess = (localisation) => ({
  "type": STEP_3_LOCATION_SUCCESS,
  localisation
});