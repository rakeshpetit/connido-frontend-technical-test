import * as actions from '../actions/session';
import { stateRec, actionRec } from './state.record';

function refreshDataDone(state: any, action: any) {
  if (action.data === null) {
    return Object.assign({}, state, {
      loading: false
    });
  } else {
    return Object.assign({}, state, {
      loading: false,
      data: action.data
    });
  }
}

function refreshSymbolDataDone(state: any, action: any) {
  if (action.data !== null) {
    return Object.assign({}, state, {
      symbolData: action.data
    });
  }
}

function setDestinationCurrencyDone(state: any, action: any) {
  if (action.data !== null) {
    return Object.assign({}, state, {
      destinationCurrency: action.data,
      userSourceAmount: 0,
      userDestinationAmount: 0
    });
  }
}

export default function reducer(state: object =
  stateRec, action: any = actionRec) {
  switch (action.type) {
    case actions.REFRESH_DATA_START:
      return Object.assign({}, state, {
        loading: true
      });
    case actions.REFRESH_DATA_DONE:
      return refreshDataDone(state, action);
    case actions.LAST_REQUEST_DONE:
      return Object.assign({}, state, {
        lastDataRequest: action.data
      });
    case actions.REFRESH_SYMBOL_DATA_DONE:
      return refreshSymbolDataDone(state, action);
    case actions.SET_DESTINATION_CURRENCY_DONE:
      return setDestinationCurrencyDone(state, action);
    case actions.SET_USER_SOURCE_AMOUNT_DONE:
      return Object.assign({}, state, {
        userSourceAmount: action.data
      });
    case actions.SET_USER_DESTINATION_AMOUNT_DONE:
      return Object.assign({}, state, {
        userDestinationAmount: action.data
      });
    case actions.SHOW_ERROR_MESSAGE_DONE:
    return Object.assign({}, state, {
      errorMessage: action.data
    });
    default:
      return state;
  }
}
