import { combineReducers } from 'redux';
import auth from './auth';
import flowers from './flowers';

export const rootReducer = combineReducers({
  auth: auth.reducer,
  flowers: flowers.reducer,
});
