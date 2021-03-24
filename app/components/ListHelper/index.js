import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './styles';

function ListHelper({ isLoading }) {
  return (
    <SC.ContainerListHelper>
      {isLoading && <SC.ActivityIndicator />}
      <SC.Label>
        {isLoading
          ? 'Buscando...'
          : 'Ooops! 😞\n Nada foi encontrado, tente novamente...'}
      </SC.Label>
    </SC.ContainerListHelper>
  );
}

ListHelper.defaultProps = {
  isLoading: false,
};

ListHelper.propTypes = {
  isLoading: PropTypes.bool,
};

export default ListHelper;
