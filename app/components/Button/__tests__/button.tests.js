import React from 'react';
import Button from '..';
import { renderWithTheme, fireEvent } from '~/utils/helperTest';

describe('Button Test', () => {
  it('should be have text label "Visualizar Notícia Completa"', () => {
    const { getByText, toJSON } = renderWithTheme(
      <Button onPress={jest.fn()} />,
    );

    expect(getByText(/Visualizar Notícia Completa/)).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be function send by prop has been called with press event', () => {
    const onPress = jest.fn();
    const { getByTestId, toJSON } = renderWithTheme(
      <Button onPress={onPress} />,
    );
    const touchable = getByTestId('component-button-press');
    fireEvent.press(touchable);
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });
});
