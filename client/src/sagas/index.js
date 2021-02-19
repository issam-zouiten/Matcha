import {fork, all} from "redux-saga/effects";
import registerSaga from "./registerSaga";

export default function *() {
  yield all([
    fork(registerSaga),
  ]);
}