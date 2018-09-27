import React from 'react';
import renderer from 'react-test-renderer';

import AmountInput from './AmountInput';

it('renders AmountInput correctly', () => {
  const calculatedSourceAmount = 100;
  const calculatedDestinationAmount = 89.95;
  const setUserSourceAmountDone = jest.fn();
  const setUserDestinationAmountDone = jest.fn();
  const tree = renderer.create
    (<AmountInput
        calculatedSourceAmount={calculatedSourceAmount}
        calculatedDestinationAmount={calculatedDestinationAmount}
        setUserSourceAmountDone={setUserSourceAmountDone}
        setUserDestinationAmountDone={setUserDestinationAmountDone}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});