import { all } from 'redux-saga/effects';
import { techSagas } from './tech';
import { scienceSagas } from './science';

export default function* root() {
  return yield all([techSagas, scienceSagas]);
}
