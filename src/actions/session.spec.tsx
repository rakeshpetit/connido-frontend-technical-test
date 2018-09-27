import * as actions from './index'
​
export const POLL_DATA = 'poll_data';

describe('actions', () => {
  it('should create an action for pollData', () => {
    const expectedAction = {
      type: actions.POLL_DATA
    }
    expect(actions.pollData()).toEqual(expectedAction)
  });
  it('should create an action for refreshData', () => {
    const expectedAction = {
      type: actions.REFRESH_DATA
    }
    expect(actions.refreshData()).toEqual(expectedAction)
  });
  it('should create an action for refreshDataStart', () => {
    const expectedAction = {
      type: actions.REFRESH_DATA_START
    }
    expect(actions.refreshDataStart()).toEqual(expectedAction)
  });
  it('should create an action for refreshDataDone', () => {
    const data = { 'currencyData' : '1' };
    const expectedAction = {
      type: actions.REFRESH_DATA_DONE,
      data
    }
    expect(actions.refreshDataDone(data)).toEqual(expectedAction)
  });
  it('should create an action for lastRequestDone', () => {
    const data = 465474;
    const expectedAction = {
      type: actions.LAST_REQUEST_DONE,
      data
    }
    expect(actions.lastRequestDone(data)).toEqual(expectedAction)
  });
  it('should create an action for refreshSymbolData', () => {
    const expectedAction = {
      type: actions.REFRESH_SYMBOL_DATA
    }
    expect(actions.refreshSymbolData()).toEqual(expectedAction)
  });
  it('should create an action for refreshSymbolDataDone', () => {
    const data = { key: 'USD', value: 'United States Dollar' };
    const expectedAction = {
      type: actions.REFRESH_SYMBOL_DATA_DONE,
      data
    }
    expect(actions.refreshSymbolDataDone(data)).toEqual(expectedAction)
  });
  it('should create an action for setDestinationCurrencyDone', () => {
    const data = 'GBP';
    const expectedAction = {
      type: actions.SET_DESTINATION_CURRENCY_DONE,
      data
    }
    expect(actions.setDestinationCurrencyDone(data)).toEqual(expectedAction)
  });
  it('should create an action for setUserSourceAmountDone', () => {
    const data = 1;
    const expectedAction = {
      type: actions.SET_USER_SOURCE_AMOUNT_DONE,
      data
    }
    expect(actions.setUserSourceAmountDone(data)).toEqual(expectedAction)
  });
  it('should create an action for setUserDestinationAmountDone', () => {
    const data = 2;
    const expectedAction = {
      type: actions.SET_USER_DESTINATION_AMOUNT_DONE,
      data
    }
    expect(actions.setUserDestinationAmountDone(data)).toEqual(expectedAction)
  });
  it('should create an action for showErrorMessage', () => {
    const data = '100';
    const expectedAction = {
      type: actions.SHOW_ERROR_MESSAGE,
      data
    }
    expect(actions.showErrorMessage(data)).toEqual(expectedAction)
  });
  it('should create an action for showErrorMessageDone', () => {
    const data = 'Error message';
    const expectedAction = {
      type: actions.SHOW_ERROR_MESSAGE_DONE,
      data
    }
    expect(actions.showErrorMessageDone(data)).toEqual(expectedAction)
  });
  it('should create an action for debugLogger', () => {
    const data = 'Debug logs';
    const expectedAction = {
      type: actions.DEBUG_LOGGER,
      data
    }
    expect(actions.debugLogger(data)).toEqual(expectedAction)
  });
});