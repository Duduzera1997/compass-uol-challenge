import * as storiesTypes from './types';

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: false,
};

const techReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case storiesTypes.FETCH_TECH:
      return { ...state, loading: true };
    case storiesTypes.FETCH_TECH_SUCCESS:
      return {
        ...INITIAL_STATE,
        data: payload,
      };
    case storiesTypes.FETCH_TECH_FAIL:
      return {
        ...INITIAL_STATE,
        error: true,
      };
    default:
      return { ...INITIAL_STATE };
  }
};

export default techReducer;
