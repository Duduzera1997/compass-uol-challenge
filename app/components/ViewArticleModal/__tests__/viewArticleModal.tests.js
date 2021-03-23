import React from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ViewArticleModal } from '~/components';
import { renderWithTheme, fireEvent } from '~/utils/helperTest';

const mock = {
  title: 'How to Vaccinate Homebound Seniors? Take the Shots to Them.',
  abstract:
    'Millions of older Americans, chronically ill and trapped at home, pose a big challenge to inoculation efforts. Doctors are on it.',
  url:
    'https://www.nytimes.com/2021/03/22/health/virus-seniors-vaccination.html',
  uri: 'nyt://article/e31cffee-6e8f-54eb-95dc-3ab6337fdb18',
  byline: 'By Roni Caryn Rabin and Chang W. Lee',
  item_type: 'Article',
  published_date: '2021-03-22T17:08:27-04:00',
  multimedia: [
    {
      url:
        'https://static01.nyt.com/images/2021/03/22/science/00VIRUS-HOMEBOUND-promo/00VIRUS-HOMEBOUND-promo-articleInline.jpg',
    },
  ],
};

describe('View Article Component', () => {
  it('should be contains a title send by prop', () => {
    const { getByText, toJSON } = renderWithTheme(
      <ViewArticleModal
        item={mock}
        visible={true}
        onRequestClose={jest.fn()}
      />,
    );
    expect(getByText(mock.title)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be contains a abstract send by prop', () => {
    const onRequestClose = jest.fn();
    const { getByText, toJSON } = renderWithTheme(
      <ViewArticleModal
        item={mock}
        visible={true}
        onRequestClose={onRequestClose}
      />,
    );
    expect(getByText(mock.abstract)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be contain a text containing the time of publication of the news up to the current time', () => {
    const { getByText, toJSON } = renderWithTheme(
      <ViewArticleModal
        item={mock}
        visible={true}
        onRequestClose={jest.fn()}
      />,
    );
    const publishedDate = new Date(mock.published_date);
    const date = `${format(publishedDate, "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    })} | ${formatDistanceToNow(publishedDate, { locale: ptBR })} atrás`;
    expect(getByText(date)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be prop onRequestClose send has been called', () => {
    const onRequestClose = jest.fn();
    const { getByTestId, toJSON } = renderWithTheme(
      <ViewArticleModal
        item={mock}
        visible={true}
        onRequestClose={onRequestClose}
      />,
    );
    const touchable = getByTestId('component-view-article-back-handler');
    fireEvent.press(touchable);
    expect(onRequestClose).toBeCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });

  // it('should be Button has been called', () => {
  //   const onRequestClose = jest.fn();
  //   const { getByTestId, toJSON } = renderWithTheme(
  //     <ViewArticleModal item={mock} visible={true} onRequestClose={jest.fn()} />,
  //   );
  //   const button = getByTestId('component-view-article-button-press');
  //   fireEvent.press(button);
  //   expect(button.).toBeCalledTimes(1);
  //   expect(toJSON()).toMatchSnapshot();
  // });
});
