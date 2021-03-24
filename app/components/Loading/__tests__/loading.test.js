import React from 'react';
import { renderWithTheme } from '~/utils';
import { Loading } from '~/components';

describe('Loading Component', () => {
  it('should be contains a logo', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Loading />);
    const logo = getByTestId('component-loading-logo');
    expect(logo).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be contains a loading item', () => {
    const { getByTestId, toJSON } = renderWithTheme(<Loading />);
    const activityIndicator = getByTestId('component-loading-item');
    expect(activityIndicator).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
