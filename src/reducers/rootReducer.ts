import { combineReducers } from 'redux';
import isLoadingReducer from './isLoadingReducer';
import errorReducer from './errorReducer';
import brandsReducer from './brandsReducer';

const rootReducer = combineReducers({
  brands: brandsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
