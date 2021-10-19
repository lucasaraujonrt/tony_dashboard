import {
  SERVICE_CALL_DETAIL,
  SERVICE_CALL_REPORT,
} from '@portal/store/actionTypes';

const initialState: reducers.ServiceCallReducer = {
  list: null,
  details: null,
  me: null,
};

const serviceCallReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SERVICE_CALL_REPORT:
      return {
        ...state,
        list: action.payload,
      };
    case SERVICE_CALL_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default serviceCallReducer;
