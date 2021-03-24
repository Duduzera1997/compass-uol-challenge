import React from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Header } from '~/components';
import { renderWithTheme } from '~/utils';
import theme from '~/styles/theme';

describe('Header Label Component', () => {
  it('should be contains a Title with News Text', () => {
    const { getByText, toJSON } = renderWithTheme(
      <Header headerText="Technology" />,
    );
    const header = getByText(/[^\s]+\sNews$/);
    expect(header).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be have a label color is white', () => {
    const { getByText, toJSON } = renderWithTheme(
      <Header headerText="Science" />,
    );
    const header = getByText(/[^\s]+\sNews$/);
    const {
      colors: {
        secondary: { white },
      },
    } = theme;
    expect(header).toHaveStyleRule('color', white);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be have a label with text send by props', () => {
    const label = 'Best Test';
    const { getByText, toJSON } = renderWithTheme(
      <Header headerText={label} />,
    );
    const header = getByText(/Best Test/);
    expect(header).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be have a label with today date label by default', () => {
    const { getByText, toJSON } = renderWithTheme(
      <Header headerText="Technology" />,
    );
    const dateLabel = getByText(
      `Hoje é, ${format(new Date(), "dd 'de' MMMM 'de' yyyy", {
        locale: ptBR,
      })}.`,
    );
    expect(dateLabel).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be have a label with date label send by prop', () => {
    const date = format(new Date(1997, 4, 9), "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });
    const { getByText, toJSON } = renderWithTheme(
      <Header headerText="Technology" dateText={date} />,
    );
    const dateLabel = getByText(`Hoje é, ${date}.`);
    expect(dateLabel).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be must contain a date with white label color', () => {
    const date = format(new Date(), "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });
    const { getByText, toJSON } = renderWithTheme(
      <Header headerText="Science" dateText={date} />,
    );
    const dateLabel = getByText(`Hoje é, ${date}.`);
    const {
      colors: {
        secondary: { white },
      },
    } = theme;
    expect(dateLabel).toHaveStyleRule('color', white);
    expect(toJSON()).toMatchSnapshot();
  });
});
