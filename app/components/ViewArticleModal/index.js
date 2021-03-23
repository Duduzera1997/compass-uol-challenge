import React from 'react';
import PropTypes from 'prop-types';
import { format, formatDistanceToNow } from 'date-fns';
import { Linking } from 'react-native';
import ptBR from 'date-fns/locale/pt-BR';

import * as SC from './styles';
import LinearBackground from '../LinearBackground';
import Button from '../Button';

function ViewArticleModal({ item, visible, onRequestClose }) {
  const publishedDate = new Date(item.published_date);
  return (
    <SC.ModalContainer visible={visible} onRequestClose={onRequestClose}>
      <LinearBackground>
        <SC.Container>
          <SC.ImagePreview source={{ uri: item.multimedia[0].url }} />
          <SC.ContainerIcon
            onPress={onRequestClose}
            testID="component-view-article-back-handler">
            <SC.BackIcon />
          </SC.ContainerIcon>
          <SC.Content>
            <SC.Title>{item.title}</SC.Title>
            <SC.LabelDate>
              {format(publishedDate, "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}{' '}
              | {formatDistanceToNow(publishedDate, { locale: ptBR })} atrás
            </SC.LabelDate>

            <SC.NoticeText>{item.abstract}</SC.NoticeText>
            <Button
              onPress={() => Linking.openURL(item.url)}
              testID="component-view-article-button-press"
            />
          </SC.Content>
        </SC.Container>
      </LinearBackground>
    </SC.ModalContainer>
  );
}

ViewArticleModal.propTypes = {
  item: PropTypes.shape({
    published_date: PropTypes.string,
    multimedia: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
    title: PropTypes.string,
    url: PropTypes.string,
    abstract: PropTypes.string,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ViewArticleModal;
