import React from 'react';
import { renderWithStoreAndThemeProviders } from '~/utils/helperTest';

import { TechnologyScreen } from '~/views';

const mock = {
  section: 'Technology',
  last_updated: '2021-03-19T17:10:56-04:00',
  num_results: 1,
  results: [
    {
      title:
        'For Political Cartoonists, the Irony Was That Facebook Didn’t Recognize Irony',
      abstract:
        'As Facebook has become more active at moderating political speech, it has had trouble dealing with satire.',
      url:
        'https://www.nytimes.com/2021/03/19/technology/political-cartoonists-facebook-satire-irony.html',
      uri: 'nyt://article/bc3e4015-4646-590d-86f6-f02038990bf0',
      byline: 'By Mike Isaac',
      item_type: 'Article',
      published_date: '2021-03-22T17:08:27-04:00',
      multimedia: [
        {
          url:
            'https://static01.nyt.com/images/2021/03/20/business/00fbtoons-print/merlin_182866944_2f787cc6-c290-42ca-a319-ccbf0ae81fc2-articleInline.jpg',
        },
      ],
    },
  ],
};

describe('Technology Screen', () => {
  it('should be contains a Technology text Label', () => {
    const state = {
      data: mock,
      loading: false,
      error: false,
    };

    const { getByText, toJSON } = renderWithStoreAndThemeProviders(
      <TechnologyScreen />,
      {
        techMock: state,
      },
    );
    const component = getByText(/Technology/);
    expect(component).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
