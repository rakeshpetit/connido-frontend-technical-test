export const POLL_DATA = 'poll_data';
export const REFRESH_DATA = 'refresh_data';
export const REFRESH_DATA_START = 'refresh_data_start';
export const REFRESH_DATA_DONE = 'refresh_data_done';
export const LAST_REQUEST_DONE = 'last_request_done';
export const REFRESH_SYMBOL_DATA = 'refresh_symbol_data';
export const REFRESH_SYMBOL_DATA_DONE = 'refresh_symbol_data_done';
export const SET_DESTINATION_CURRENCY_DONE = 'set_destination_currency_done';
export const SET_USER_SOURCE_AMOUNT_DONE = 'set_user_source_amount_done';
export const SET_USER_DESTINATION_AMOUNT_DONE = 'set_destination_source_amount_done';
export const SHOW_ERROR_MESSAGE = 'show_error_message';
export const SHOW_ERROR_MESSAGE_DONE = 'show_error_message_done';
export const DEBUG_LOGGER = 'debug_log';

export function pollData() {
  return {
    type: POLL_DATA
  };
}

export function refreshData() {
  return {
    type: REFRESH_DATA
  };
}

export function refreshDataStart() {
  return {
    type: REFRESH_DATA_START
  };
}

export function refreshDataDone(data: Object) {
  return {
    type: REFRESH_DATA_DONE,
    data
  };
}

export function lastRequestDone(data: number) {
  return {
    type: LAST_REQUEST_DONE,
    data
  };
}

export function refreshSymbolData() {
  return {
    type: REFRESH_SYMBOL_DATA
  };
}

export function refreshSymbolDataDone(data: Object) {
  return {
    type: REFRESH_SYMBOL_DATA_DONE,
    data
  };
}

export function setDestinationCurrencyDone(data: String) {
  return {
    type: SET_DESTINATION_CURRENCY_DONE,
    data
  };
}

export function setUserSourceAmountDone(data: number) {
  return {
    type: SET_USER_SOURCE_AMOUNT_DONE,
    data
  };
}

export function setUserDestinationAmountDone(data: number) {
  return {
    type: SET_USER_DESTINATION_AMOUNT_DONE,
    data
  };
}

export function showErrorMessage(data: string) {
  return {
    type: SHOW_ERROR_MESSAGE,
    data
  };
}

export function showErrorMessageDone(data: string) {
  return {
    type: SHOW_ERROR_MESSAGE_DONE,
    data
  };
}

export function debugLogger(data: any) {
  return {
    type: DEBUG_LOGGER,
    data
  };
}