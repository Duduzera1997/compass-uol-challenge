import { action } from 'typesafe-actions';
import * as scienceTypes from './types';

export const fetchSciencesSuccess = (data) =>
  action(scienceTypes.FETCH_SCIENCE_SUCCESS, data);

export const fetchSciencesFail = () => action(scienceTypes.FETCH_SCIENCE_FAIL);

export const fetchSciencesAction = () => action(scienceTypes.FETCH_SCIENCE);
