import {fork, all} from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from './loginSaga';
import logoutSaga from "./logoutSaga";
import resetPasswordSaga from './resetPSaga';


export default function *ind() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(resetPasswordSaga),
    fork(logoutSaga)
  ]);
}