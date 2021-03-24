import PropTypes from 'prop-types';
import React from 'react';

import * as SC from './styles';
import { formatDateLiteral } from '~/utils';

function Card({ imageUrl, title, abstract, noticeDate, onCardPress }) {
  return (
    <SC.ContainerCard>
      <SC.CardTouchable onPress={onCardPress}>
        <SC.CardContent flex={1}>
          <SC.PreviewImage source={{ uri: imageUrl }} />
        </SC.CardContent>
        <SC.CardContent flex={2.5}>
          <SC.Text size={15} fontBold>
            {title}
          </SC.Text>
          <SC.TextDate size={11.5} fontBold>
            {formatDateLiteral(noticeDate)}
          </SC.TextDate>
          <SC.Text size={13}>{abstract}</SC.Text>
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
  onCardPress: PropTypes.func.isRequired,
};

export default Card;
