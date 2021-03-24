import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './styles';

import Header from '../Header';
import LinearBackground from '../LinearBackground';
import SearchInput from '../SearchInput';
import ViewArticleModal from '../ViewArticleModal';

function ContentWrapper({
  title,
  children,
  showSearchInput,
  onSeachInputTextChange,
  modalProps: { visible, item, onRequestClose },
}) {
  return (
    <LinearBackground>
      <SC.Container>
        <ViewArticleModal
          visible={visible}
          item={item}
          onRequestClose={onRequestClose}
        />
        <SC.ContainerByFlex flex={1}>
          <SC.ContainerByFlex flex={1}>
            <Header headerText={title} />
          </SC.ContainerByFlex>
          {showSearchInput && (
            <SC.ContainerByFlex flex={1}>
              <SearchInput onChangeText={onSeachInputTextChange} />
            </SC.ContainerByFlex>
          )}
          <SC.ContainerByFlex flex={6}>{children}</SC.ContainerByFlex>
        </SC.ContainerByFlex>
      </SC.Container>
    </LinearBackground>
  );
}

ContentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showSearchInput: PropTypes.bool.isRequired,
  onSeachInputTextChange: PropTypes.func.isRequired,
  modalProps: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    item: PropTypes.shape({}),
    onRequestClose: PropTypes.func,
  }).isRequired,
};

export default ContentWrapper;
