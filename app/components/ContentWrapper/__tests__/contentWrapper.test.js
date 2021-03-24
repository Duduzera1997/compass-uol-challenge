import React from 'react';
import { ContentWrapper } from '~/components';
import { renderWithTheme, fireEvent } from '~/utils';

describe('Articles Container', () => {
  it('should be call a onSeachInputTextChange prop function', () => {
    const onSeachInputTextChange = jest.fn();
    const { getByPlaceholderText, toJSON } = renderWithTheme(
      <ContentWrapper
        title="Science"
        showSearchInput={true}
        modalProps={{
          visible: false,
          item: jest.mock(),
          onRequestClose: jest.fn(),
        }}
        onSeachInputTextChange={onSeachInputTextChange}>
        <></>
      </ContentWrapper>,
    );

    fireEvent.changeText(getByPlaceholderText(/Busque/), 'called');

    expect(onSeachInputTextChange).toHaveBeenCalledWith('called');
    expect(toJSON()).toMatchSnapshot();
  });
});
