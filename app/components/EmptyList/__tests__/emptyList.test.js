import React from 'react';

import { EmptyList } from '~/components';
import { renderWithTheme } from '~/utils/helperTest';

describe('EmptyList Component', () => {
  it('should be contains a Buscando Text into component', () => {
    const { getByText, toJSON } = renderWithTheme(<EmptyList isLoading />);

    expect(getByText(/Buscando/)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be contains a  Nada foi encontrado Text into component', () => {
    const { getByText, toJSON } = renderWithTheme(<EmptyList />);

    expect(getByText(/Nada foi encontrado/)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
