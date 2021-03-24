import React from 'react';
import { renderWithTheme } from '~/utils';
import { LoadingScreen } from '~/views';

describe('Loading Screen', () => {
  it('should be render screen', () => {
    const { getByTestId, toJSON } = renderWithTheme(<LoadingScreen />);
    const logo = getByTestId('component-loading-logo');
    expect(logo).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
