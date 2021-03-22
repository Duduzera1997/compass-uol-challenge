import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './styles';
import { white, whiteLight } from '~/styles/colors';

function TabIcon({ icon, focused }) {
  return (
    <SC.ContainerIcon testID="component-tabIcon-container">
      <SC.IconTab
        name={icon}
        size={20}
        color={focused ? white : whiteLight}
        testID="component-tabIcon-icon"
      />
    </SC.ContainerIcon>
  );
}

TabIcon.defaultProps = {
  icon: 'airplay',
  focused: false,
};

TabIcon.propTypes = {
  icon: PropTypes.string,
  focused: PropTypes.bool,
};

export default TabIcon;
