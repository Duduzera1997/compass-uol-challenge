import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import * as SC from './styles';

function Card({ imageUrl, title, abstract, noticeDate }) {
  return (
    <SC.ContainerCard>
      <SC.CardTouchable>
        <SC.CardContent flex={1}>
          <SC.PreviewImage source={{ uri: imageUrl }} />
        </SC.CardContent>
        <SC.CardContent flex={2.5}>
          <SC.Text size={15} fontBold>
            {title}
          </SC.Text>
          <SC.TextDate size={11.5} fontBold>
            {format(new Date(noticeDate), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR,
            })}
          </SC.TextDate>
          <SC.Text numberOfLines={2} size={13}>
            {abstract}
          </SC.Text>
        </SC.CardContent>
      </SC.CardTouchable>
    </SC.ContainerCard>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  noticeDate: PropTypes.string.isRequired,
};

export default Card;
