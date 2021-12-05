import { Dispatch } from '@reduxjs/toolkit';
import KPIApi from '@portal/controllers/kpi';
import { decreaseLoading, increaseLoading } from '../Loading/action';
import { KPI_REPORT } from '../actionTypes';

export const getReport = () => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await KPIApi.report();
    dispatch({
      payload,
      type: KPI_REPORT,
    });
  } finally {
    dispatch(decreaseLoading());
  }
};
