import React from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';

import * as SC from './styles';
import LinearBackground from '../LinearBackground';
import Button from '../Button';
import { formatDateWithDistance } from '~/utils';

function ViewArticleModal({ item, visible, onRequestClose }) {
  return (
    <SC.ModalContainer visible={visible} onRequestClose={onRequestClose}>
      {visible && item && (
        <LinearBackground>
          <SC.Container>
            <SC.ImagePreview source={{ uri: item.multimedia[0]?.url }} />
            <SC.ContainerIcon
              onPress={onRequestClose}
              testID="component-view-article-back-handler">
              <SC.BackIcon />
            </SC.ContainerIcon>
            <SC.Content>
              <SC.Title>{item.title}</SC.Title>
              <SC.LabelDate>
                {formatDateWithDistance(new Date(item.published_date))}
              </SC.LabelDate>
              <SC.NoticeText>{item.abstract}</SC.NoticeText>
              <Button onPress={() => Linking.openURL(item.url)} />
            </SC.Content>
          </SC.Container>
        </LinearBackground>
      )}
    </SC.ModalContainer>
  );
}

ViewArticleModal.defaultProps = {
  item: {
    title: null,
    abstract: null,
    url: null,
    multimedia: null,
  },
};

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
  }),
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ViewArticleModal;
