import { Dispatch } from '@reduxjs/toolkit';
import CompanyApi from '@portal/controllers/company';
import { decreaseLoading, increaseLoading } from '../Loading/action';
import {
  COMPANY_REPORT,
  COMPANY_DETAIL,
  COMPANY_REPORT_ALL,
} from '../actionTypes';
import NavigationService from '@portal/services/navigation';

export const cleanDetails = () => async (dispatch: Dispatch) => {
  dispatch({
    payload: null,
    type: COMPANY_DETAIL,
  });
};

export const getReport = (searchParams: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await CompanyApi.report({
      ...searchParams,
      pageSize: searchParams.pageSize,
    });
    dispatch({
      payload,
      type: COMPANY_REPORT,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const getDetail = (id: string) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await CompanyApi.details(id);
    dispatch({
      payload,
      type: COMPANY_DETAIL,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const getAll = () => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await CompanyApi.getAll();
    dispatch({
      payload,
      type: COMPANY_REPORT_ALL,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const create = (body: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    await CompanyApi.create(body);
    NavigationService.back();
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const put = (body: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    await CompanyApi.put(body);
    NavigationService.back();
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};
