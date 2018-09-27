import React from 'react';
import renderer from 'react-test-renderer';

import CurrencyOutput from './CurrencyOutput';

it('renders CurrencyOutput correctly', () => {
  const lastUpdatedTimeStamp = 24436453;
  const input = '1';
  const output = '0.8945';
  const tree = renderer.create
    (<CurrencyOutput
        lastUpdatedTimeStamp={lastUpdatedTimeStamp}
        input={input}
        output={output}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});