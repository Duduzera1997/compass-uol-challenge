import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import theme from '~/styles/theme';

export const renderWithTheme = (childrens) =>
  render(<ThemeProvider theme={theme}>{childrens}</ThemeProvider>);

export const renderWithStoreProvider = (childrens) => {
  const mockStore = configureStore();
  const store = mockStore();
  return render(<Provider store={store}>{childrens}</Provider>);
};
