import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './styles';

function EmptyList({ isLoading }) {
  return (
    <SC.ContainerEmptyList>
      {isLoading && <SC.ActivityIndicator />}
      <SC.Label>
        {isLoading
          ? 'Buscando...'
          : 'Ooops! 😞\n Nada foi encontrado, tente novamente...'}
      </SC.Label>
    </SC.ContainerEmptyList>
  );
}

EmptyList.defaultProps = {
  isLoading: false,
};

EmptyList.propTypes = {
  isLoading: PropTypes.bool,
};

export default EmptyList;
