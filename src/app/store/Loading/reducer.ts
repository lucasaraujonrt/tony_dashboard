import { DECREASE_LOADING, INCREASE_LOADING } from '@portal/store/actionTypes';
import { LoadingReducer } from '~/models/reducers';

const initialState: reducers.LoadingReducer = {
  amount: 0,
};

const loadingReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case INCREASE_LOADING:
      state = {
        ...state,
        amount: state.amount + 1,
      };
      break;
    case DECREASE_LOADING:
      state = {
        ...state,
        amount: state.amount - 1,
      };
      break;
    default:
      return state;
  }

  return state;
};

export const isLoading = (state: LoadingReducer) => {
  return state.amount > 0;
};

export default loadingReducer;
