import React from 'react';
import { SearchInput } from '~/components';
import { renderWithTheme } from '~/utils';

describe('Search Input Component', () => {
  it('should be contains a "Busque uma notícia" Text', () => {
    const { getByPlaceholderText, toJSON } = renderWithTheme(<SearchInput />);
    expect(getByPlaceholderText(/Busque uma notícia/)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
