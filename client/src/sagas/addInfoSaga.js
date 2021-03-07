import { takeLatest, call,put,select, delay} from "redux-saga/effects";
import {resetState} from '../actions/resetStateAction';
import { getTagsSuccess, step1infoError, add_LocationSuccess} from "../actions/InfosAction";
import { updateUserSuccess} from '../actions/userAction';
import {request} from './helper';
const GetTagsUser =
  function *getSelectTags() {
    try {
       const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:3001/getTags",
                "method": "post"
              },token);  
        if(response.data)
        {
            yield put(getTagsSuccess(response.data));
        }
        else
        {
            yield put(getTagsSuccess());
        }
    }catch (error) {
      if (error.response) {
        yield put(getTagsSuccess());
      }
    }
};

const add_Info =
  function *add_Info ({data, id}) {
    try {
      const info = {...data, id}
      const tag = data.tags.map(item => item.value)
      info.tags = tag;
       const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:3001/addInfo",
                "data": info,
                "method": "post"
              },token);

      if(response.data.added)
      {
        yield put(updateUserSuccess(response.data.uu));
      }
      else
      {
        yield put(step1infoError(response.data.error));
      }
      yield delay(4000);
      yield put(resetState());
    }catch (error) {
      if (error.response) {
        yield put(step1infoError('there has been an error'));
      }
    }
};

const get_Location =
  function *getLocation () {
    try {
      const id = yield select((state) => state.user.id);
       const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:3001/getLocation",
                "data": {id: id},
                "method": "post"
              },token);
      if(response.data)
      {
        yield put(add_LocationSuccess({marker: response.data.marker, lat: response.data.localisation.lat, lng: response.data.localisation.lng}));
      }
      else
      {
        yield put(step1infoError(response.data.error));
      }
      yield delay(4000);
      yield put(resetState());
    }catch (error) {
      if (error.response) {
        yield put(step1infoError('there has been an error'));
      }
    }
};

export default function *info() {
  yield takeLatest("GET_TAGS", GetTagsUser);
  yield takeLatest("ADD_INFO", add_Info);
  yield takeLatest("GET_LOCALISATION", get_Location);
}