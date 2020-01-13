import { takeLatest, call, put, all } from 'redux-saga/effects';

// import history from '~/service/history';
// import api from '~/service/api';

export default all([takeLatest('@auth/SIGN_IN_REQUEST', () => {})]);
