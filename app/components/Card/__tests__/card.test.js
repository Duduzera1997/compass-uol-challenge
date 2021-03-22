import React from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { renderWithTheme } from '~/utils/helperTest';
import { Card } from '~/components';

describe('Card Component', () => {
  it('should be render a Card with delivered props', () => {
    const imageUrl =
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Mapa_do_Brasil_com_a_Bandeira_Nacional.png';
    const title =
      'Brazil wins covid-19 and peoples return to their normal lives';
    const abstract =
      'Brazil finally managed to win Covid-19, it was the 12th country to win the virus';
    const noticeDate = new Date(2022, 6, 15).toISOString();
    const { getByText, toJSON } = renderWithTheme(
      <Card
        imageUrl={imageUrl}
        title={title}
        abstract={abstract}
        noticeDate={noticeDate}
      />,
    );
    const formatedDate = format(
      new Date(noticeDate),
      "dd 'de' MMMM 'de' yyyy",
      {
        locale: ptBR,
      },
    );
    expect(getByText(/Brazil wins covid-19/)).toBeTruthy();
    expect(getByText(/12th country to win the virus/)).toBeTruthy();
    expect(getByText(formatedDate)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
