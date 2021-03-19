import {fork, all} from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from './loginSaga';
import logoutSaga from "./logoutSaga";
import resetPasswordSaga from './resetPSaga';
import addInfoSaga from './addInfoSaga';
import stepSaga from './stepSaga';
import picsSaga from './picsSaga';
import editProfile from './profileSaga';
import chatSaga from "./chatSaga";


export default function *ind() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(resetPasswordSaga),
    fork(logoutSaga),
    fork(addInfoSaga),
    fork(stepSaga),
    fork(picsSaga),
    fork(editProfile),
    fork(chatSaga),
  ]);
}