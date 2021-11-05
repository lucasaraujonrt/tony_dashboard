import { Dispatch } from '@reduxjs/toolkit';
import ServiceCallApi from '@portal/controllers/serviceCall';
import * as MessageService from '@portal/services/message';
import { decreaseLoading, increaseLoading } from '../Loading/action';
import {
  SERVICE_CALL_DETAIL,
  SERVICE_CALL_KANBAN,
  SERVICE_CALL_REPORT,
} from '../actionTypes';

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

export const getAll = (searchParams?: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await ServiceCallApi.reportAll(searchParams);
    dispatch({
      payload,
      type: SERVICE_CALL_KANBAN,
    });
  } catch (error) {
    console.log('errrer', error);
  } finally {
    dispatch(decreaseLoading());
  }
};

export const updateCard = (body: any) => async (dispatch: Dispatch) => {
  try {
    await ServiceCallApi.updateStatus(body);
    MessageService.success('COMPONENTS.KPI_CARD.MESSAGES.SUCCESS');
  } catch (error) {
    // @ts-ignore
    dispatch(getAll());
    MessageService.error('COMPONENTS.KPI_CARD.MESSAGES.ERROR');
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
