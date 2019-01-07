import * as types from '../types';

const initialState = {
  token: '',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case types.SAVE_USER_TOKEN:
      return {
        ...state,
        token: action.payload.data.token,
      };
    case types.SAVE_USER_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case types.LOG_OUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
