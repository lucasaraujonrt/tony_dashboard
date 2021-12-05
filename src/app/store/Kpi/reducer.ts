import { KPI_REPORT } from '@portal/store/actionTypes';

const initialState: reducers.KpiReducer = {
  list: null,
};

const KPIReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case KPI_REPORT:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default KPIReducer;
