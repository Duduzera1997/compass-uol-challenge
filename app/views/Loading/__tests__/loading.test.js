import React from 'react';
import { render } from '@testing-library/react-native';
import { LoadingScreen } from '~/views';

describe('Loading Screen', () => {
  it('should be render screen', () => {
    const { getByTestId, toJSON } = render(<LoadingScreen />);
    const logo = getByTestId('component-loading-logo');
    expect(logo).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
