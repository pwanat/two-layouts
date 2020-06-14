import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import { doLogin } from '../services/brandServices';
import * as actionCreators from '../actionCreators/brandActionCreators';
import * as actionTypes from '../actionTypes/brandActionTypes';

function* onLogin({ email, password, brandId }: actionTypes.LoginAction) {
  try {
    yield put(actionCreators.loginRequest());
    const { data } = yield call(doLogin, email, password);
    if (parseInt(data.randomSuccess, 10) > 4) {
      yield put(actionCreators.loginSuccess(data.success.username, brandId));
    } else {
      yield put(actionCreators.loginFailure(data.error, brandId));
    }
  } catch (error) {
    console.log(error, 'error');
    yield put(actionCreators.loginFailure(error.message, brandId));
  }
}

function* watchOnLogin() {
  yield takeEvery(actionTypes.LOGIN, onLogin);
}

export default function* brandSaga() {
  yield all([fork(watchOnLogin)]);
}
