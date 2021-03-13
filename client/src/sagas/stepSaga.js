
import {put, takeLatest,call} from "redux-saga/effects";
import { select } from 'redux-saga/effects'; 
import {request} from './helper';
import { incStepSuccess} from '../actions/stepAction';
export const Step =
    function *Step () {
        try {
            const user = yield select(state => state.user);
            const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:3001/updateStep",
                "data": {step : user.step + 1,id : user.id},
                "method": "post"
              },token);
            if(response)
            {
                yield put(incStepSuccess());
            }
        } catch (error) {
            console.log(error);
        }
    };
  
export default function *st() {
    yield takeLatest("INC_STEP", Step);
}