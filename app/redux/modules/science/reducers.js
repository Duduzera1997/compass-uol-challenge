import * as scienceTypes from './types';

const INITIAL_STATE = {
  data: {
    last_updated: null,
    num_results: 0,
    results: [],
  },
  loading: false,
  error: false,
};

export default function scienceReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case scienceTypes.FETCH_SCIENCE:
      return { ...state, loading: true };
    case scienceTypes.FETCH_SCIENCE_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    case scienceTypes.FETCH_SCIENCE_FAIL:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return { ...state };
  }
}
