import React from 'react';

import { ListHelper } from '~/components';
import { renderWithTheme } from '~/utils';

describe('ListHelper Component', () => {
  it('should be contains a  "Nada foi encontrado" Text into component', () => {
    const { getByText, toJSON } = renderWithTheme(<ListHelper />);
    expect(getByText(/Nada foi encontrado/)).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });
  it('should be contains a  "Buscando..." Text into component', () => {
    const { getByText, toJSON } = renderWithTheme(<ListHelper isLoading />);
    expect(getByText(/Buscando.../)).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });
});
