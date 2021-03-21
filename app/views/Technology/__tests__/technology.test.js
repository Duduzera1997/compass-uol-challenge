import React from 'react';

import { renderWithStoreProvider } from '~/utils/helperTest';

import { TechnologyScreen } from '~/views';

describe('Technology Screen', () => {
  it('should be contains a Technology text', () => {
    const { getByText, toJSON } = renderWithStoreProvider(<TechnologyScreen />);
    const label = getByText('Technology');
    expect(label).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
