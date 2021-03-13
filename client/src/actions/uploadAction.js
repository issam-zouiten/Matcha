export const GET_PIC = "GET_PIC";
export const GET_PIC_SUCCESS = "GET_PIC_SUCCESS";
export const GET_PIC_ERROR = "GET_PIC_ERROR";
export const SEND_PICS = "SEND_PICS";
export const SEND_PICS_SUCCESS = "SEND_PICS_SUCCESS";
export const SEND_PICS_ERROR = "SEND_PICS_ERROR";
export const DEL_PICS = "DEL_PICS";
export const DEL_PICS_SUCCESS = "DEL_PICS_SUCCESS";
export const DEL_PICS_ERROR = "DEL_PICS_ERROR";
export const SET_PROFILE_PIC = 'SET_PROFILE_PIC';
export const SET_PROFILE_PIC_SUCCESS = 'SET_PROFILE_PIC_SUCCESS';
export const SET_PROFILE_PIC_ERROR = 'SET_PROFILE_PIC_ERROR';

export const getPic = (user_id) => ({
    "type": GET_PIC,
    user_id
});
export const getPicSuccess = (images) => ({
    "type": GET_PIC_SUCCESS,
    images
});
export const get_PicError = (err) => ({
    "type": GET_PIC_ERROR,
    err
});
export const sendPics= (data) => ({
    "type": SEND_PICS,
    data,
});
export const sendPicsSuccess= () => ({
    "type": SEND_PICS_SUCCESS,
});
export const sendPicsError= (err) => ({
    "type": SEND_PICS_ERROR,
    err
});
export const delPics= (img) => ({
    "type": DEL_PICS,
    img
});
export const delPicsSuccess= (images) => ({
    "type": DEL_PICS_SUCCESS,
    images
});
export const delPicsError= (err) => ({
    "type": DEL_PICS_ERROR,
    err
});
export const setProfilePic= (imgId) => ({
    "type": SET_PROFILE_PIC,
    imgId
});
export const setProfilePicSuccess= (images) => ({
    "type": SET_PROFILE_PIC_SUCCESS,
    images
});
export const setProfilePicError= (err) => ({
    "type": SET_PROFILE_PIC_ERROR,
    err
});