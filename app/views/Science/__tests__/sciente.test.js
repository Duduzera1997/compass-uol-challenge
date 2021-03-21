import React from 'react';
import { render } from '@testing-library/react-native';

import { ScienceScreen } from '~/views';

describe('Science Screen', () => {
  it('should be contains a Science Text', () => {
    const { getByText } = render(<ScienceScreen />);
    const label = getByText('Science');
    expect(label).toBeTruthy();
  });
});
