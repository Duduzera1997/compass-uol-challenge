import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import * as SC from './styles';

function HeaderLabel({ headerText, dateText }) {
  return (
    <SC.ContainerHeaderLabel>
      <SC.HeaderTitle>{headerText} News</SC.HeaderTitle>
      <SC.DateLabel>{dateText}</SC.DateLabel>
    </SC.ContainerHeaderLabel>
  );
}

HeaderLabel.defaultProps = {
  dateText: format(new Date(), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
};

HeaderLabel.propTypes = {
  headerText: PropTypes.string.isRequired,
  dateText: PropTypes.string,
};

export default HeaderLabel;
