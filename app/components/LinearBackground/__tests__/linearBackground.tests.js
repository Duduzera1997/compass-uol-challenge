import React from 'react';
import { render } from '@testing-library/react-native';
import { LinearBackground } from '~/components';

describe('Linear Background', () => {
  it('should be render a linear gradient component correctly', () => {
    const { getByTestId, toJSON } = render(
      <LinearBackground testID="component-linear-background" />,
    );
    expect(getByTestId('component-linear-background')).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });
});
