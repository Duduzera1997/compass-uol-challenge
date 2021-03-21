import { action } from 'typesafe-actions';
import * as technologyTypes from './types';

export const fetchTechnologiesSuccess = (data) =>
  action(technologyTypes.FETCH_TECH_SUCCESS, data);

export const fetchTechnologiesFail = () =>
  action(technologyTypes.FETCH_TECH_FAIL);

export const fetchTechnologiesAction = () => action(technologyTypes.FETCH_TECH);
