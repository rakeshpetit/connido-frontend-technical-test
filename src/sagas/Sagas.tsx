import { fork, take, takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { channel, delay } from 'redux-saga';
import moment from 'moment';
import axios from 'axios';
import * as action from '../actions';
import { ENV, DELAY, LOGGING_ENABLED } from '../const';

const actionChannel = channel();

export function callAPI(url: string) {
    return axios.get(url)
      .then(res => res.data)
      .catch(error => error);
}

function* pollData() {
  while (true) {
    yield call(refreshData);
    yield delay(DELAY);
  }
}

export function* refreshData() {
    try {
        yield put(action.refreshDataStart());
        const result = yield call(callAPI, ENV.FIXER_API);
        if (result.error) {
          yield put(action.refreshDataDone(undefined));
          yield call(showErrorMessage, {data: result.error.info });
        } else {
          yield put(action.lastRequestDone(moment().unix()));
          yield put(action.refreshDataDone(result));
        }
      } catch (error) {
        yield put(action.refreshDataDone(undefined));
        yield call(showErrorMessage, {data: error.json() });
      }
}

export function refreshDataPromise() {
    return Promise.resolve(actionChannel.put(action.refreshDataStart()))
    .then(() => callAPI(ENV.FIXER_API))
    .then((result) => result.error ? Promise.reject('Error in result') : result)
    .then((result) => {
      actionChannel.put(action.lastRequestDone(moment().unix()));
      actionChannel.put(action.refreshDataDone(result));
      return result;
      })
    .catch(() => {
      actionChannel.put(action.refreshDataDone(undefined));
      console.log('Error');
    });
}

function* putActions() {
  while (true) {
    yield put(yield take(actionChannel));
  }
}

function* refreshSymbolData() {
  try {
      const result = yield call(callAPI, ENV.SYMBOL_API);
      if (result.error) {
        yield call(showErrorMessage, {data: result.error.info });
      } else {
        yield put(action.refreshSymbolDataDone(result));
      }
    } catch (error) {
      yield put(action.refreshSymbolDataDone(undefined));
      console.log(error);
    }
}

function* showErrorMessage(message: any) {
  try {
      yield put(action.showErrorMessageDone(message.data));
      yield delay(10000);
      yield put(action.showErrorMessageDone(''));
    } catch (error) {
      console.log(error);
    }
}

function debugLogger(data: any) {
  if (LOGGING_ENABLED) {
    console.log(data);
  }
}

export default function* rootSaga() {
  yield takeEvery(action.REFRESH_DATA, refreshDataPromise);
  // yield takeEvery(action.REFRESH_DATA, refreshData);
  yield takeEvery(action.REFRESH_SYMBOL_DATA, refreshSymbolData);
  yield takeLatest(action.SHOW_ERROR_MESSAGE, showErrorMessage);
  yield takeEvery(action.DEBUG_LOGGER, debugLogger);
  yield takeLatest(action.POLL_DATA, pollData);
  yield fork(putActions);
}
