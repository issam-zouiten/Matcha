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
import usersSaga from "./usersSaga";
import notifSaga from "./notifSaga";


export default function *ind() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(picsSaga),
    fork(resetPasswordSaga),
    fork(logoutSaga),
    fork(addInfoSaga),
    fork(stepSaga),
    fork(editProfile),
    fork(chatSaga),
    fork(usersSaga),
    fork(notifSaga),

  ]);
}