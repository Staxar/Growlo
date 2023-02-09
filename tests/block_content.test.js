import * as React from 'react';
import renderer from 'react-test-renderer';
import { DATA_CATEGORY } from '../assets/DATA_CATEGORY';
import { BlockContent } from '../components/block_content';

test('Check did block_content renders', async () => {
  const tree = renderer.create(<BlockContent props={{ id: '1', category: 'Fruits' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
