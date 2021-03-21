import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

function HeaderLabel({ label }) {
  return (
    <View>
      <Text>{label} News</Text>
    </View>
  );
}

HeaderLabel.defaultProps = {
  label: 'Best',
};

HeaderLabel.propTypes = {
  label: PropTypes.string,
};

export default HeaderLabel;
