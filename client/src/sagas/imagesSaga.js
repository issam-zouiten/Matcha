import { takeLatest,call, put ,select} from "redux-saga/effects";
import {request} from './helper';
import {setProfilePicError,getImages,getImagesSuccess,getImagesError,sendImagesError,delImagesError} from "../actions/imagesAction";

const getPictures =
  function *getPictures ({user_id}) {
    try {
     
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
                "url": "http://localhost:5000/getImages",
                "data": {user_id : user_id},
                "method": "post"
              },token);
        if(response.data.length > 0)
        {
            yield put(getImagesSuccess(response.data));
        }
       
    }catch (error) {
      if (error.response) {
        yield put(getImagesError(error.response));
      }
    }
};