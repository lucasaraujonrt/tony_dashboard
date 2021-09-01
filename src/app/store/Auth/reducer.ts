import {
  AUTH_CHECK_LOGGED,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ME
} from '@portal/store/actionTypes';

const initialState: reducers.AuthReducer = {
  checkLogged: false,
  me: null,
  authToken: {
    accessToken: null,
    refreshToken: null,
    token: null,
  },
};

const authReducer = (
  state = initialState, 
  action: any,
) => {
  switch (action.type) {
    case AUTH_LOGIN:
      state = {
        ...state,
        authToken: action.payload,
      };
      break;
    case AUTH_CHECK_LOGGED:
      state = {
        ...state,
        checkLogged: true,
      };
      break;
    case AUTH_ME:
      state = {
        ...state,
        me: action.payload,
      };
      break;
    case AUTH_LOGOUT:
      state = {
        checkLogged: true,
        me: null,
        authToken: {
          accessToken: null,
          refreshToken: null,
          token: null,
        },
      };
      break;
    default:
      return state;
  }

  return state;
};

export default authReducer;
