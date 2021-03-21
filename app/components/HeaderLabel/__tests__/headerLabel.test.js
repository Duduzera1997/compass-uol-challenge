import React from 'react';
import { render } from '@testing-library/react-native';

import { HeaderLabel } from '~/components';

describe('Header Label Component', () => {
  it('should be contains a Title with News Text', () => {
    const { getByText } = render(<HeaderLabel label="Technology" />);
    const header = getByText(/[^\s]+\sNews$/);
    expect(header).toBeTruthy();
  });
});
