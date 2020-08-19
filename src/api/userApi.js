import {API} from '.';

export class UserApi {
  static register = (data) => API.post(`/api/v1/users/register`, data);
  static login = (data) => API.post(`/api/v1/users/login`, data);
  static fetchMe = () => API.get(`/api/v1/users/me`);
}
