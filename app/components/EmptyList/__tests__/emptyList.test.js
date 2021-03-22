import React from 'react';

import { render } from '@testing-library/react-native';
import { EmptyList } from '~/components';

describe('EmptyList Component', () => {
  it('should be contains a Empty List Text into component', () => {
    const { getByText, toJSON } = render(<EmptyList />);

    expect(getByText(/Empty List/)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
