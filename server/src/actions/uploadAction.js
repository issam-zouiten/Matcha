export const GET_PIC = "GET_PIC";
export const GET_PIC_SUCCESS = "GET_PIC_SUCCESS";
export const GET_PIC_ERROR = "GET_PIC_ERROR";

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