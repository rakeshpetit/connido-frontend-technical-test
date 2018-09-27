import React from 'react';
import renderer from 'react-test-renderer';

import PickerCurrency from './PickerCurrency';

describe('Header', () => {
    it('renders nothing when there are no symbols', () => {
    const symbols = [{}];
    const setDestinationCurrencyDone = jest.fn();
    const destinationCurrency = 'GBP';
    const tree = renderer.create
        (<PickerCurrency
            symbols={symbols}
            setDestinationCurrencyDone={setDestinationCurrencyDone}
            destinationCurrency={destinationCurrency}
        />).toJSON();
    expect(tree).toMatchSnapshot();
    });
    it('renders PickerCurrency correctly when there is symbol data', () => {
        const symbols = [{key: 'USD', value: 'United States Dollar'}];
        const setDestinationCurrencyDone = jest.fn();
        const destinationCurrency = 'GBP';
        const tree = renderer.create
            (<PickerCurrency
                symbols={symbols}
                setDestinationCurrencyDone={setDestinationCurrencyDone}
                destinationCurrency={destinationCurrency}
            />).toJSON();
        expect(tree).toMatchSnapshot();
        });
});