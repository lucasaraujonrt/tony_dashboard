import { COMPANY_DETAIL, COMPANY_REPORT } from '@portal/store/actionTypes';

const initialState: reducers.CompanyReducer = {
  list: null,
  details: null,
  me: null,
};

const companyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COMPANY_REPORT:
      return {
        ...state,
        list: action.payload,
      };
    case COMPANY_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
