import rootReducer from './modules/rootReducer';

import { techActions, techTypes, techReducer, techSagas } from './modules/tech';

import {
  scienceActions,
  scienceTypes,
  scienceReducer,
  scienceSagas,
} from './modules/science';

export {
  rootReducer,
  techActions,
  techTypes,
  techReducer,
  techSagas,
  scienceActions,
  scienceTypes,
  scienceReducer,
  scienceSagas,
};
