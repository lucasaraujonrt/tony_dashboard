import { getRouteStackPath } from '@portal/config/routes';
import AuthRequests from '@portal/controllers/auth';
import { setAuthorizationHeader } from '@portal/api/instance';
import * as MessageService from '~/services/message';
import * as StorageService from '~/services/storage';
import { decreaseLoading, increaseLoading } from '../Loading/action';
import { AUTH_CHECK_LOGGED, AUTH_LOGIN, AUTH_LOGOUT } from '../actionTypes';
import { getMe } from '../User/action';

export const authenticate =
  (userData: models.AuthRequest) => async (dispatch: any) => {
    dispatch(increaseLoading());
    try {
      const payload: models.AuthResponse = await AuthRequests.login(userData);

      StorageService.removeItem('session-token');

      StorageService.setItem('session-token', payload);

      setAuthorizationHeader(payload.token as string);

      dispatch({
        payload,
        type: AUTH_LOGIN,
      });

      StorageService.setItem('auth', userData);
      MessageService.success('PAGES.AUTH.LOGIN.MESSAGES.WELCOME');

      window.location.href = getRouteStackPath('USER', 'REPORT');
      dispatch(getMe());
    } catch (err) {
      if (err && err.response) {
        MessageService.error(err.response.message);
      } else if (err && err.message) {
        MessageService.error('PAGES.AUTH.LOGIN.MESSAGES.INVALID');
      }
    } finally {
      dispatch(decreaseLoading());
    }
  };

export const refreshToken = (userData: any) => async (dispatch: any) => {
  dispatch(increaseLoading());
  try {
    const payload: models.AuthResponse = await AuthRequests.refreshToken(
      userData
    );
    StorageService.setItem('session-token', payload);
    setAuthorizationHeader(payload.accessToken as string);

    dispatch({
      payload,
      type: AUTH_LOGIN,
    });

    dispatch(getMe());
  } catch (err) {
    StorageService.removeItem('session-token');
    window.location.href = '/';
  } finally {
    dispatch(decreaseLoading());
  }
};

export const logout = () => async (dispatch: any) => {
  dispatch(increaseLoading());
  try {
    const accessToken = await StorageService.getItem('session-token');
    await AuthRequests.logout(accessToken);
    StorageService.removeItem('session-token');
    dispatch({
      type: AUTH_LOGOUT,
    });

    window.location.href = '/';
  } catch (err) {
    MessageService.error('APPLICATION.ERRORS.GENERIC');
  } finally {
    dispatch(decreaseLoading());
  }
};

export const checkIsLogged = () => (dispatch: any) => {
  dispatch(increaseLoading());
  try {
    const token = StorageService.getItem('session-token');
    console.log('token', token);
    if (token) {
      setAuthorizationHeader(token.accessToken as string);
      dispatch({
        payload: token,
        type: AUTH_LOGIN,
      });
    }
  } finally {
    dispatch({
      type: AUTH_CHECK_LOGGED,
      payload: true,
    });
    dispatch(decreaseLoading());
  }
};
