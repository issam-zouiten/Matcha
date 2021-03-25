import { takeLatest, put, call, delay } from "redux-saga/effects";
import { push } from "react-router-redux";
import { loginError, loginUserSuccess, loginErrorField } from "../actions/loginAction";
import { updateUserSuccess } from '../actions/userAction'
import {GetNotif} from '../actions/notifAction'
import { request } from './helper';
import socket from '../socketConn';
import {resetState} from '../actions/resetStateAction';

const login =
  function* login({ data }) {
    try {
      const username = data.username;
      const password = data.password;
      const response = yield call(request, {
        "url": "http://localhost:3001/login",
        "data": {
          username,
          password
        },
        "method": "post"
      });

      if (response.data.isValid) {
        const user = response.data.user;
        yield put(loginUserSuccess());
        yield put(updateUserSuccess(user));
        socket.emit('join', { id: user.id });
        if (user.step === 3) {
          yield put(GetNotif())
          yield put(push("/Browser"));
        }
        else
          yield put(push("/profile"));
      }
      else {
        yield put(loginErrorField(response.data.errorField))
        yield delay(4000);
        yield put(resetState());

      }
    } catch (error) {
      if (error.response) {
        yield put(loginError("error.response.statusText", "error.response.status"));
      }
    }
  };

export default function* log() {
  yield takeLatest("LOGIN_USER", login);
}