/* eslint-disable no-case-declarations */
import {
  AUTH_SUCCESS,
  RESET_AUTH_ERROR,
  AUTH_FAIL,
  LOGOUT,
  FETCH_ME_SUCCESS
} from './types';

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_AUTH_ERROR:
      return {
        ...state,
        error: null
      }
    case AUTH_SUCCESS:
      localStorage.setItem("token", action.payload.auth_token);
      return {
        ...state,
        token: action.payload.auth_token
      }
    case AUTH_FAIL:
      return {
        ...state,
        error: action.payload.error,
        token: action.payload.auth_token
      }
    case FETCH_ME_SUCCESS:
      return {
        ...state,
        user: action.payload.user
      }
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null,
        user: null
      };
    default:
      return state;
  }
};

export default reducer;
