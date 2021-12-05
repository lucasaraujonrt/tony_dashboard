import {
  COMPANY_DETAIL,
  COMPANY_REPORT,
  COMPANY_REPORT_ALL,
} from '@portal/store/actionTypes';

const initialState: reducers.CompanyReducer = {
  list: null,
  details: null,
  me: null,
  listAll: null,
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
    case COMPANY_REPORT_ALL:
      return {
        ...state,
        listAll: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
