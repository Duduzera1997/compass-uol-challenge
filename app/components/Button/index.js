import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './styles';

function Button({ onPress }) {
  return (
    <SC.Container>
      <SC.TouchableButton onPress={onPress} testID="component-button-press">
        <SC.Label>Visualizar Notícia Completa</SC.Label>
      </SC.TouchableButton>
    </SC.Container>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Button;
