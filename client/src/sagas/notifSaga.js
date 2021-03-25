import {takeLatest, put, select, call, delay} from "redux-saga/effects";
import {request} from './helper';
import {resetNotifState} from '../actions/resetStateAction';
import {GetNotifSuccess, OpenNotifSuccess, delNotifSuccess} from '../actions/notifAction';
import socket from '../socketConn';

const getNotif =
  function *getNotif () {
    try {

      const user_id = yield select(state => state.user.id, );
      const data = {user_id : user_id}
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
          "url": "http://localhost:3001/getNotif",
          "method": "post",
          "data" : data
        },token);
      if(response.data)
      {
        yield put(GetNotifSuccess(response.data));
      }
    }catch (error) {
      if (error.response) {
      }
    }
};

const delNotif =
  function *delNotif ({notif}) {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {user_id : user_id, notif_id : notif.notifId}
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
          "url": "http://localhost:3001/delNotif",
          "method": "post",
          "data" : data
        },token);
      if(response.data)
      {
      }

    }catch (error) {
      if (error.response) {

      }
    }
};

const openNotif =
  function *openNotif () {
    try {
      const user_id = yield select(state => state.user.id)
      const data = {user_id : user_id}
      const token = yield select((state) => state.user.token);
      yield call(request, {
          "url": "http://localhost:3001/openNotif",
          "method": "post",
          "data" :data
        },token);  
      yield put(OpenNotifSuccess());
      socket.emit('openNotif', {id: user_id});
    }catch (error) {
      if (error.response) {
        
      }
    }
};

const resetNotif =
  function *resetNotif () {
    try {
      yield delay (2000);
      yield put(resetNotifState());
    }catch (error) {
      console.log(error);
    }
};

export default function *noti() {
    yield takeLatest("GET_NOTIF", getNotif);
    yield takeLatest("DEL_NOTIF", delNotif);
    yield takeLatest("OPEN_NOTIF", openNotif);
    yield takeLatest("NEW_NOTIF", resetNotif);
}