import { all, fork } from 'redux-saga/effects';
import brandSaga from './brandSaga';

export default function* rootSaga() {
  yield all([fork(brandSaga)]);
}
