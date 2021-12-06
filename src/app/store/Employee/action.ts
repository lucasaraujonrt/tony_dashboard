import { Dispatch } from '@reduxjs/toolkit';
import EmployeeApi from '@portal/controllers/employee';
import { decreaseLoading, increaseLoading } from '../Loading/action';
import { EMPLOYEE_REPORT, EMPLOYEE_DETAIL } from '../actionTypes';
import NavigationService from '@portal/services/navigation';
import * as MessageService from '@portal/services/message';

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

export const create = (body: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    await EmployeeApi.create(body);
    NavigationService.back();
  } catch (error) {
    MessageService.error(
      'Erro ao criar o colaborador. Verifique todos os campos'
    );
  } finally {
    dispatch(decreaseLoading());
  }
};

export const put = (body: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    await EmployeeApi.put(body);
    NavigationService.back();
  } catch (error) {
    MessageService.error(
      'Erro ao editar o colaborador. Verifique todos os campos'
    );
  } finally {
    dispatch(decreaseLoading());
  }
};
