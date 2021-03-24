import PropTypes from 'prop-types';
import React from 'react';

import * as SC from './styles';
import { formatDateLiteral } from '~/utils';

function Header({ headerText, dateText }) {
  return (
    <SC.ContainerHeader>
      <SC.HeaderTitle>{headerText} News</SC.HeaderTitle>
      <SC.DateLabel>Hoje é, {dateText}.</SC.DateLabel>
    </SC.ContainerHeader>
  );
}

Header.defaultProps = {
  dateText: formatDateLiteral(new Date()),
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  dateText: PropTypes.string,
};

export default Header;
