import React from 'react';
import renderer from 'react-test-renderer';

import Background from './Background';

it('renders Background correctly', () => {
  const tree = renderer.create(<Background />).toJSON();
  expect(tree).toMatchSnapshot();
});