import { takeLatest,call, put ,select} from "redux-saga/effects";
import {request} from './helper';
import {getPic,getPicSuccess,get_PicError,sendPicsError,delPicsError,setProfilePicError} from "../actions/uploadAction";

const getPictures =
  function *getPictures ({user_id}) {
    try {
     
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
                "url": "http://localhost:3001/getPics",
                "data": {user_id : user_id},
                "method": "post"
              },token);
        if(response.data.length > 0)
        {
            yield put(getPicSuccess(response.data));
        }
       
    }catch (error) {
      if (error.response) {
        yield put(get_PicError(error.response));
      }
    }
};
const sendPictures =
  function *sendPictures ({data}) {
    try {
      const user_id = yield select(state => state.user.id);
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
                "url": "http://localhost:3001/upload",
                "data": data,
                "method": "post"
              },token);  
        if(response.data)
        {
          yield put(getPic(user_id));
        }
       
    }catch (error) {
      if (error.response) {
        yield put(sendPicsError(error.response));
      }
    }
};
const delPictures =
  function *delPictures ({img}) {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {
        user_id : user_id,
        img_id : img.imgId,
        isProfilePic : img.isProfilePic
    }
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
                "url": "http://localhost:3001/delPics",
                "data": data,
                "method": "post"
              },token);  
        if(response.data)
        {
          yield put(getPic(user_id));
        }
    }catch (error) {
      if (error.response) {
        yield put(delPicsError(error.response));
      }
    }
};
const setProfilePicture =
  function *setProfilePicture ({imgId}) {
    try {

      const user_id = yield select(state => state.user.id);
      const data = {
        user_id : user_id,
        img_id : imgId
    }
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
                "url": "http://localhost:3001/setProfilePicture",
                "data": data,
                "method": "post"
              },token);  
        if(response.data)
        {
          yield put(getPic(user_id));
        }
    }catch (error) {
      if (error.response) {
        yield put(setProfilePicError(error.response));
      }
    }
};
export default function* pi() {
    yield takeLatest("GET_PIC", getPictures);
    yield takeLatest("SEND_PICS", sendPictures);
    yield takeLatest("DEL_PICS",delPictures);
    yield takeLatest("SET_PROFILE_PIC",setProfilePicture);
  }