import {API} from '../../api';
import {
  AUTH_SUCCESS, LOGOUT, AUTH_FAIL, RESET_AUTH_ERROR, FETCH_ME_SUCCESS
} from './types';
import {UserApi} from '../../api/userApi';

export const authSuccess = (payload) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authFail = (payload) => ({
  type: AUTH_FAIL,
  payload,
});

export const fetchMeSuccess = (payload) => ({
  type: FETCH_ME_SUCCESS,
  payload
});

export const resetAuthError = () => ({
  type: RESET_AUTH_ERROR,
});

export const login = (params) => async (dispatch) => {
  try {
    const res = await UserApi.login(params);
    dispatch(authSuccess(res.data));
    API.defaults.headers.common['Authorization'] = `${res.data.auth_token}`;
    dispatch(fetchCurrentUser());
    return Promise.resolve();
  } catch (e) {
    dispatch(authFail(e.response.data));
    return Promise.reject();
  }
};

export const register = (params) => async (dispatch) => {
  try {
    const res = await UserApi.register(params);
    dispatch(authSuccess(res.data));
    API.defaults.headers.common['Authorization'] = `${res.data.auth_token}`;
    dispatch(fetchCurrentUser());
    return Promise.resolve();
  } catch (e) {
    dispatch(authFail(e.response.data));
    return Promise.reject();
  }
}

export const fetchCurrentUser = () => async (dispatch) => {
  const res = await UserApi.fetchMe();
  dispatch(fetchMeSuccess(res.data));
}

export const logout = () => ({
  type: LOGOUT,
});
