import {API} from '.';

export class FlowerApi {
  static fetchFlowers = (data) => API.get(`/api/v1/flowers`, data);
}
