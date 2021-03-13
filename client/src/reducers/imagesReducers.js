import {
    GET_PIC,
    GET_PIC_SUCCESS,
    GET_PIC_ERROR,
    SEND_PICS,
    SEND_PICS_SUCCESS,
    SEND_PICS_ERROR,
    DEL_PICS,
    DEL_PICS_SUCCESS,
    DEL_PICS_ERROR,
    SET_PROFILE_PIC,
    SET_PROFILE_PIC_SUCCESS,
    SET_PROFILE_PIC_ERROR
} from "../actions/uploadAction";

const DEFAULT_STATE =  {images: [], isImages: false, err : ''};

export default function pi(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_PIC:
            return { images: null, isImages: false};
        case GET_PIC_SUCCESS:
            return { images: action.images, isImages: true};
        case GET_PIC_ERROR:
            return { err : action.err, isImages: false};
        case SEND_PICS:
            return { images: null ,isImages: false};
        case SEND_PICS_SUCCESS:
            return { images: action.images, isImages: true};
        case SEND_PICS_ERROR:
            return { err: action.err, isImages: false};
        case DEL_PICS:
            return { images: null, isImages: false};
        case DEL_PICS_SUCCESS:
            return { images: action.images, isImages: true};
        case DEL_PICS_ERROR:
            return { err: action.err, isImages: false};
        case SET_PROFILE_PIC:
            return { images: null, isImages: false};
        case SET_PROFILE_PIC_SUCCESS:
            return { images: action.images, isImages: true};
        case SET_PROFILE_PIC_ERROR:
            return { err: action.err, isImages: false};

      default:
        return state;
    }
}