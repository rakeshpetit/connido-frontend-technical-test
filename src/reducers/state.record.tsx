interface stateLayout {
    data: any;
    lastDataRequest: number;
    symbolData: any;
    loading: boolean;
    sourceCurrency: string;
    destinationCurrency: string;
    userSourceAmount: number;
    userDestinationAmount: number;
    errorMessage: string;
};

interface actionLayout {
    type: string,
    data?: any
};

export const actionRec : actionLayout = { type: undefined };

export const stateRec: stateLayout = { 
    data: undefined,
    lastDataRequest: undefined,
    symbolData: undefined,
    loading: false,
    sourceCurrency: 'EUR',
    destinationCurrency: 'GBP',
    userSourceAmount: undefined,
    userDestinationAmount: undefined,
    errorMessage: ''
};