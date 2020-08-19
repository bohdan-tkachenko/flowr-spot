import {
  FETCH_FLOWERS_SUCCESS
} from './types';
import {FlowerApi} from '../../api/flowerApi';

export const fetchFlowersSuccess = (payload) => ({
  type: FETCH_FLOWERS_SUCCESS,
  payload,
});

export const fetchFlowers = () => async (dispatch) => {
  const res = await FlowerApi.fetchFlowers();
  dispatch(fetchFlowersSuccess(res.data));
};
