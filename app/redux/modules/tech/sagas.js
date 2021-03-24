import { all, call, put, takeLatest } from 'redux-saga/effects';
import { orderBy } from 'lodash';
import { fetchTechnologiesFail, fetchTechnologiesSuccess } from './actions';
import * as techTypes from './types';
import nyt from '~/api/nyt';

export function* fetchTechnologies() {
  try {
    const {
      data: { results, last_updated, num_results },
    } = yield call(nyt.get, '/technology');
    yield put(
      fetchTechnologiesSuccess({
        last_updated,
        num_results,
        results: orderBy(results, 'published_date', 'desc'),
      }),
    );
  } catch (error) {
    yield put(fetchTechnologiesFail());
  }
}

export default all([takeLatest(techTypes.FETCH_TECH, fetchTechnologies)]);
