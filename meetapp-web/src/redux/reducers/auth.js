import {
  AUTH_SUCCESS,
  AUTH_REQUEST,
  AUTH_FAILURE,
  AUTH_RESET,
  AUTH_REGISTER,
  AUTH_UPDATE_REQUEST,
  AUTH_UPDATE_SUCCESS,
} from '../actions/auth';

const INITIAL_STATE = {
  user: null,
  auth: null,
  isLoading: false,
};

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case AUTH_SUCCESS: {
      return {
        ...state,
        auth: payload.token,
        user: payload.user,
        isLoading: false,
      };
    }
    case AUTH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AUTH_REGISTER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AUTH_FAILURE: {
      return {
        ...state,
        errorMessage: payload.error,
        isLoading: false,
      };
    }
    case AUTH_UPDATE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AUTH_RESET: {
      return { user: null, auth: null, isLoading: false };
    }
    case AUTH_UPDATE_SUCCESS: {
      return {
        ...state,
        user: { ...state.user, ...payload },
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
