import React from 'react';
import { render } from '@testing-library/react-native';

import { TabIcon } from '~/components';
import { red, grey } from '~/styles/colors';

describe('TabIcon Component', () => {
  it('should be render container in center', () => {
    const { getByTestId, toJSON } = render(<TabIcon />);
    const container = getByTestId('component-tabIcon-container');
    expect(container).toHaveStyleRule(
      'justify-content',
      'center',
      'align-items',
      'center',
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('should be render a TabIcon without props', () => {
    const { getByTestId, toJSON } = render(<TabIcon />);
    const icon = getByTestId('component-tabIcon-icon');
    expect(icon).toHaveStyleRule('font-size', 20);
    expect(icon).toHaveStyleRule('color', grey);
    expect(toJSON()).toMatchSnapshot();
  });
  it('should be render a TabIcon with focused prop', () => {
    const { getByTestId, toJSON } = render(<TabIcon focused />);
    const icon = getByTestId('component-tabIcon-icon');
    expect(icon).toHaveStyleRule('font-size', 20);
    expect(icon).toHaveStyleRule('color', red);
    expect(toJSON()).toMatchSnapshot();
  });
});
