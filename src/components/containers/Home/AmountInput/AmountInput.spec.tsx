import React from 'react';
import renderer from 'react-test-renderer';

import AmountInput from './AmountInput';

it('renders correctly when there are no items', () => {
  const calculatedSourceAmount = 100;
  const calculatedDestinationAmount = 89.95;
  const setUserSourceAmountDone = () => {};
  const setUserDestinationAmountDone = () => {};
  const tree = renderer.create
    (<AmountInput 
        calculatedSourceAmount={calculatedSourceAmount}
        calculatedDestinationAmount={calculatedDestinationAmount}
        setUserSourceAmountDone={setUserSourceAmountDone}
        setUserDestinationAmountDone={setUserDestinationAmountDone}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});