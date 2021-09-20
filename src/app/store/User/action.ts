import { Dispatch } from '@reduxjs/toolkit';
import UserRequests from '@portal/controllers/user';
import * as MessageService from '~/services/message';
import * as StorageService from '~/services/storage';
import { decreaseLoading, increaseLoading } from '../Loading/action';
import { USER_DETAIL, USER_REPORT, USER_ME} from '../actionTypes';

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
    })

  } catch (error) {
    
  } finally {
    dispatch(decreaseLoading());
  }
}

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
}