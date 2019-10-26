import { toast } from 'react-toastify';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import {
  AUTH_REQUEST,
  acAuthSuccess,
  acAuthFailure,
  AUTH_REGISTER,
  acUpdateSuccess,
  AUTH_UPDATE_REQUEST
} from '../actions/auth';
import api from '../../services/api';
import history from '~/services/history';

export function setToken({ payload }) {
  if (!payload) return;
  if (payload.auth) {
    api.defaults.headers.Authorization = `Bearer ${payload.auth.auth}`;
  }
}

export function* signIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password,
      isOrganizer: true
    });

    const { user, token } = response.data;

    yield put(acAuthSuccess(user, token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    history.push('/dashboard');
  } catch (e) {
    toast.error(e.response.data.error);
    yield put(acAuthFailure(e.response.data.error));
  }
}

export function* signUp({ payload }) {
  const { email, password, name } = payload;
  try {
    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true
    });

    const { user, token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(acAuthSuccess(user, token));
    toast.success('Conta  com sucesso');
    history.push('/dashboard');
  } catch (e) {
    toast.error(e.response.data.error);
    yield put(acAuthFailure(e.response.data.error));
  }
}

export function* updateProfile({ payload }) {
  const token = yield select(({ auth }) => auth.auth);
  const {
    // eslint-disable-next-line
    email,
    name,
    ...rest
  } = payload;
  try {
    const profile = { email, name, ...(payload.password ? rest : {}) };
    const response = yield call(api.put, 'users', profile, {
      headers: { Authorization: `Bearer ${token}` }
    });

    toast.success('Perfil atualizado com sucesso!');

    yield put(acUpdateSuccess(response.data));
  } catch (e) {
    toast.error(e.response.data.error);
    yield put(acAuthFailure(e.response.data.error));
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AUTH_REQUEST, signIn),
  takeLatest(AUTH_REGISTER, signUp),
  takeLatest(AUTH_UPDATE_REQUEST, updateProfile)
]);
