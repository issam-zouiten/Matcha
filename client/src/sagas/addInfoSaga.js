import { takeLatest, call, put, select, delay } from "redux-saga/effects";
import { resetState } from '../actions/resetStateAction';
import { getTagsSuccess, step1infoError, add_LocationSuccess, createTagError, createTagSuccess } from "../actions/InfosAction";
import { updateUserSuccess } from '../actions/userAction';
import { request } from './helper';
const GetTagsUser =
  function* getSelectTags() {
    try {
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
        "url": "http://localhost:3001/getTags",
        "method": "post"
      }, token);

      if (response.data) {
        yield put(getTagsSuccess(response.data));
      }
      else {
        yield put(getTagsSuccess());
      }
    } catch (error) {
      if (error.response) {
        yield put(getTagsSuccess());
      }
    }
  };

const add_Info =
  function* add_Info({ data, id }) {
    try {
      const info = { ...data, id }
      const tag = data.tags.map(item => item.value)
      info.tags = tag;
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
        "url": "http://localhost:3001/addInfo",
        "data": info,
        "method": "post"
      }, token);

      if (response.data.complet_step1) {
        yield put(updateUserSuccess(response.data.getuser));
      }
      else {
        yield put(step1infoError(response.data.error));
      }
      yield delay(4000);
      yield put(resetState());
    } catch (error) {
      if (error.response) {
        yield put(step1infoError('there has been an error'));
      }
    }
  };

const get_Location =
  function* getLocation() {
    try {
      const id = yield select((state) => state.user.id);
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
        "url": "http://localhost:3001/getLocation",
        "data": { id: id },
        "method": "post"
      }, token);
      if (response.data) {
        // console.log(response.data.localisation.lng);

        yield put(add_LocationSuccess({ marker: response.data.marker, lat: response.data.localisation.lat, lng: response.data.localisation.lng }));
      }
      else {
        yield put(step1infoError(response.data.error));
      }
      yield delay(4000);
      yield put(resetState());
    } catch (error) {
      if (error.response) {
        yield put(step1infoError('there has been an error'));
      }
    }
  };

  const Add_Location =
  function *AddLocation ({localisation}) {
    try {
      const id = yield select((state) => state.user.id);
      const token = yield select((state) => state.user.token);
      yield call(request, {
          "url": "http://localhost:3001/location",
          "data": {id: id, localisation},
          "method": "post"
        },token);
    }catch (error) {
      if (error.response) {
        yield put(step1infoError('there has been an error'));
      }
      yield delay(4000);
      yield put(resetState());
    }
};

  const createSelectTag =
  function *createSelectTag(newtag) {
    try {
        const id = yield select((state) => state.user.id);
        const tag = newtag.data.value;
         const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:3001/createTag",
                "data": {tag: tag, id: id},
                "method": "post"
              },token);
        if(response.data.created)
        {
          yield put(createTagSuccess(response.data.tags));
        }
        else
        {
          yield put(createTagError(response.data.error));
        }
        yield delay(4000);
        yield put(resetState());
    }catch (error) {
      if (error.response) {
        yield put(createTagError('there has been an error'));
      }
    }
};
export default function* info() {
  yield takeLatest("GET_TAGS", GetTagsUser);
  yield takeLatest("CREATE_TAG", createSelectTag);
  yield takeLatest("ADD_INFO", add_Info);
  yield takeLatest("GET_STEP_3_LOCATION", get_Location);
  yield takeLatest("STEP_3_LOCATION", Add_Location);

}