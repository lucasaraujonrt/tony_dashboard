import { EMPLOYEE_DETAIL, EMPLOYEE_REPORT } from '@portal/store/actionTypes';

const initialState: reducers.EmployeeReducer = {
  list: null,
  details: null,
  me: null,
};

const employeeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case EMPLOYEE_REPORT:
      return {
        ...state,
        list: action.payload,
      };
    case EMPLOYEE_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
