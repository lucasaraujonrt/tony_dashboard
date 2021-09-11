import { DECREASE_LOADING, INCREASE_LOADING } from '../actionTypes';

export const increaseLoading = () => ({
  type: INCREASE_LOADING,
});

export const decreaseLoading = () => ({
  type: DECREASE_LOADING,
});

export const addLoading = () => (dispatch: any) => dispatch(increaseLoading());

export const removeLoading = () => (dispatch: any) => dispatch(decreaseLoading());
