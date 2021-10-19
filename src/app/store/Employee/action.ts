import { Dispatch } from '@reduxjs/toolkit';
import EmployeeApi from '@portal/controllers/employee';
// import * as MessageService from '~/services/message';
// import * as StorageService from '~/services/storage';
import { decreaseLoading, increaseLoading } from '../Loading/action';
import { EMPLOYEE_REPORT, EMPLOYEE_DETAIL } from '../actionTypes';
import NavigationService from '@portal/services/navigation';

export const cleanDetails = () => async (dispatch: Dispatch) => {
  dispatch({
    payload: null,
    type: EMPLOYEE_DETAIL,
  });
};

export const getReport = (searchParams: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await EmployeeApi.report({
      ...searchParams,
      pageSize: searchParams.pageSize,
    });
    dispatch({
      payload,
      type: EMPLOYEE_REPORT,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const getDetail = (id: string) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await EmployeeApi.details(id);
    dispatch({
      payload,
      type: EMPLOYEE_DETAIL,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const createUser =
  (body: models.UserForm) => async (dispatch: Dispatch) => {
    dispatch(increaseLoading());
    try {
      await EmployeeApi.create(body);
      NavigationService.back();
    } catch (error) {
    } finally {
      dispatch(decreaseLoading());
    }
  };
