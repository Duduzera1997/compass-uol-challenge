import React from 'react';
import { ListArticles } from '~/components';
import { renderWithTheme } from '~/utils/helperTest';

const mock = {
  section: 'Science',
  last_updated: '2021-03-19T17:10:56-04:00',
  num_results: 1,
  results: [
    {
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
    },
  ],
};

describe('List Articles Component', () => {
  it('should be contains List Articles text', () => {
    const { UNSAFE_getAllByType } = renderWithTheme(
      <ListArticles
        data={mock}
        loading={false}
        error={false}
        onRefresh={jest.fn()}
        onCardPress={jest.fn()}
      />,
    );
    expect(UNSAFE_getAllByType(ListArticles).length).toBe(1);
  });
});
