import { Alert } from 'react-native';
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

export function* signIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    const { user, token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(acAuthSuccess(user, token));
  } catch (e) {
    Alert.alert('Erro', e.response.data.error);
    yield put(acAuthFailure(e.response.data.error));
  }
}

export function* signUp({ payload }) {
  const { email, password, name } = payload;
  try {
    const response = yield call(api.post, 'users', {
      name,
      email,
      password
    });

    const { user, token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`
    yield put(acAuthSuccess(user, token));
  } catch (e) {
    Alert.alert('Erro', e.response.data.error);
    yield put(acAuthFailure(e.response.data.error));
  }
}

export function* updateProfile({ payload }) {
  const token = yield select(({ auth }) => auth.auth);
  const {
    email,
    name,
    ...rest
  } = payload;
  try {
    const profile = { email, name, ...(payload.password ? rest : {}) };
    const response = yield call(api.put, 'users', profile, {
      headers: { Authorization: `Bearer ${token}` }
    });

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');

    yield put(acUpdateSuccess(response.data));
  } catch (e) {
    Alert.alert('Erro', e.response.data.error);
    yield put(acAuthFailure(e.response.data.error));
  }
}

function setToken({ payload }) {
  if (!payload) return;
  if (payload.auth) {
    api.defaults.headers.Authorization = `Bearer ${payload.auth.auth}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AUTH_REQUEST, signIn),
  takeLatest(AUTH_REGISTER, signUp),
  takeLatest(AUTH_UPDATE_REQUEST, updateProfile)
]);
