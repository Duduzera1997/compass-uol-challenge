import { all, takeLatest } from 'redux-saga/effects';
import { techTypes, techSagas } from './tech';

export default function* root() {
  return yield all([
    takeLatest(techTypes.FETCH_TECH, techSagas.fetchTechnologies),
  ]);
}
