import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import * as SC from './styles';

function Header({ headerText, dateText }) {
  return (
    <SC.ContainerHeader>
      <SC.HeaderTitle>{headerText} News</SC.HeaderTitle>
      <SC.DateLabel>Hoje é, {dateText}.</SC.DateLabel>
    </SC.ContainerHeader>
  );
}

Header.defaultProps = {
  dateText: format(new Date(), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  dateText: PropTypes.string,
};

export default Header;
