import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import theme from '~/styles/theme';

export const renderWithTheme = (component) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export const renderWithStoreAndThemeProviders = (component, { techMock }) => {
  const mockStore = configureStore();
  const state = {
    techReducer: {
      ...techMock,
    },
  };
  const store = mockStore(state);
  return renderWithTheme(<Provider store={store}>{component}</Provider>);
};
