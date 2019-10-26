export const AUTH_REQUEST = 'auth-request';
export const AUTH_SUCCESS = 'auth-success';
export const AUTH_FAILURE = 'auth-failure';
export const AUTH_RESET = 'auth-reset';
export const AUTH_REGISTER = 'auth-register';
export const AUTH_UPDATE_REQUEST = 'auth-update-request';
export const AUTH_UPDATE_SUCCESS = 'auth-update-success';

export const acAuthRequest = (email, password) => ({
  type: AUTH_REQUEST,
  payload: { email, password }
});

export const acAuthSuccess = (user, token) => ({
  type: AUTH_SUCCESS,
  payload: { user, token }
});

export const acAuthFailure = error => ({
  type: AUTH_FAILURE,
  payload: { error }
});

export const acAuthReset = () => ({
  type: AUTH_RESET
});

export const acAuthRegister = (name, email, password) => ({
  type: AUTH_REGISTER,
  payload: { name, email, password }
});

export const acAuthRequestUpdate = profile => ({
  type: AUTH_UPDATE_REQUEST,
  payload: profile
});

export const acUpdateSuccess = profile => ({
  type: AUTH_UPDATE_SUCCESS,
  payload: profile
});
