import { Dispatch } from '@reduxjs/toolkit';
import ServiceCallApi from '@portal/controllers/serviceCall';
// import * as MessageService from '~/services/message';
// import * as StorageService from '~/services/storage';
import { decreaseLoading, increaseLoading } from '../Loading/action';
import { SERVICE_CALL_DETAIL, SERVICE_CALL_REPORT } from '../actionTypes';

export const cleanDetails = () => async (dispatch: Dispatch) => {
  dispatch({
    payload: null,
    type: SERVICE_CALL_DETAIL,
  });
};

export const getReport = (searchParams: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await ServiceCallApi.report({
      ...searchParams,
      pageSize: searchParams.pageSize,
    });
    dispatch({
      payload,
      type: SERVICE_CALL_REPORT,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const getDetail = (id: string) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await ServiceCallApi.details(id);
    dispatch({
      payload,
      type: SERVICE_CALL_DETAIL,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};
