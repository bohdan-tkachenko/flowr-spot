/* eslint-disable no-case-declarations */
import {
  FETCH_FLOWERS_SUCCESS,
  FETCH_FLOWERS_FAILURE,
} from './types';

const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLOWERS_SUCCESS:
      return {
        ...state,
        items: action.payload.flowers
      }
    case FETCH_FLOWERS_FAILURE:
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

export default reducer;
