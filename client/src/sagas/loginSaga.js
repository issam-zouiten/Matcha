import { takeLatest, put, call, delay } from "redux-saga/effects";
import { push } from "react-router-redux";
import { loginError, loginUserSuccess, loginErrorField } from "../actions/loginAction";
import { request } from './helper';

const login =
  function *login({ data }) {
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
        yield put(loginUserSuccess());
        yield put(push("/Browser"));
      }
      else {
        yield put(loginErrorField(response.data.errorField))
        yield delay(4000);
      }
    } catch (error) {
      if (error.response) {
        yield put(loginError("error.response.statusText", "error.response.status"));
      }
    }
  };

export default function *() {
  yield takeLatest("LOGIN_USER", login);
}