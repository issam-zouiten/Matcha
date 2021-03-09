import {GET_PIC,GET_PIC_SUCCESS,GET_PIC_ERROR,} from "../actions/uploadAction";

const DEFAULT_STATE =  {images: [], isImages: false, err : ''};

export default function pic(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_PIC:
            return { images: null, isImages: false};
        case GET_PIC_SUCCESS:
            return { images: action.images, isImages: true};
        case GET_PIC_ERROR:
            return { err : action.err, isImages: false};
      default:
        return state;
    }
}