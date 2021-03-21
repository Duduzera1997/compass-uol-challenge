import { call, put } from 'redux-saga/effects';
import { fetchTechnologiesFail, fetchTechnologiesSuccess } from './actions';
import nyt from '~/api/nyt';

export function* fetchTechnologies() {
  try {
    const {
      data: { results, last_updated, num_results },
    } = yield call(nyt.get, '/technology');
    yield put(fetchTechnologiesSuccess({ last_updated, num_results, results }));
  } catch (error) {
    yield put(fetchTechnologiesFail());
  }
}
