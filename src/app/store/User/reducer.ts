import {
  USER_DETAIL,
  USER_ME,
  USER_REPORT
} from '@portal/store/actionTypes';

const initialState: reducers.UserReducer = {
  list: null,
  allUsers: [],
  details: null,
  me: null,
};

const userReducer = (
  state = initialState, 
  action: any,
) => {
  switch (action.type) {
    case USER_REPORT:
      return {
        ...state,
        list: action.payload,
      };
    case USER_DETAIL:
      return {
        ...state,
        details: action.payload,
      }
    case USER_ME: 
      return {
        ...state,
        me: action.payload,
      }
    default:
      return state;
  }
};

export default userReducer;
