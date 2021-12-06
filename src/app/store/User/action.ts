import { Dispatch } from '@reduxjs/toolkit';
import UserRequests from '@portal/controllers/user';
import { decreaseLoading, increaseLoading } from '../Loading/action';
import { USER_DETAIL, USER_REPORT, USER_ME } from '../actionTypes';
import NavigationService from '@portal/services/navigation';
import * as MessageService from '@portal/services/message';

export const cleanDetails = () => async (dispatch: Dispatch) => {
  dispatch({
    payload: null,
    type: USER_DETAIL,
  });
};

export const getMe = () => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const response = await UserRequests.me();
    dispatch({
      type: USER_ME,
      payload: response,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const getReport = (searchParams: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await UserRequests.report({
      ...searchParams,
      pageSize: searchParams.pageSize,
    });
    dispatch({
      payload,
      type: USER_REPORT,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const getDetail = (id: string) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await UserRequests.details(id);
    dispatch({
      payload,
      type: USER_DETAIL,
    });
  } catch (error) {
  } finally {
    dispatch(decreaseLoading());
  }
};

export const createUser = (body: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    await UserRequests.create(body);
    NavigationService.back();
  } catch (error) {
    MessageService.error('Erro ao criar o usuário. Verifique todos os campos');
  } finally {
    dispatch(decreaseLoading());
  }
};

export const putUser = (body: any) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    await UserRequests.create(body);
    NavigationService.back();
  } catch (error) {
    MessageService.error('Erro ao editar o usuário. Verifique todos os campos');
  } finally {
    dispatch(decreaseLoading());
  }
};
