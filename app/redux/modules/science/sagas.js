import { all, call, put, takeLatest } from 'redux-saga/effects';
import { orderBy } from 'lodash';
import * as scienceTypes from './types';
import { fetchSciencesFail, fetchSciencesSuccess } from './actions';
import nyt from '~/api/nyt';

export function* fetchSciences() {
  try {
    const {
      data: { results, last_updated, num_results },
    } = yield call(nyt.get, '/science');
    yield put(
      fetchSciencesSuccess({
        last_updated,
        num_results,
        results: orderBy(results, 'published_date', 'desc'),
      }),
    );
  } catch (error) {
    yield put(fetchSciencesFail());
  }
}

export default all([takeLatest(scienceTypes.FETCH_SCIENCE, fetchSciences)]);
