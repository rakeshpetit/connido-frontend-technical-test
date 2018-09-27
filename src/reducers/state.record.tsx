interface StateLayout {
    data: any;
    lastDataRequest: number;
    symbolData: any;
    loading: boolean;
    sourceCurrency: string;
    destinationCurrency: string;
    userSourceAmount: number;
    userDestinationAmount: number;
    errorMessage: string;
}

interface ActionLayout {
    type: string,
    data?: any
}

export const actionRec: ActionLayout = { type: undefined };

export const stateRec: StateLayout = {
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