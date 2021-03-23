import React from 'react';
import * as SC from './styles';
import { compassoLogoWhite as compassoLogo } from '~/assets';

function Loading() {
  return (
    <SC.ContainerLoading>
      <SC.Logo source={compassoLogo} testID="component-loading-logo" />
      <SC.ActivityIndicator testID="component-loading-item" />
    </SC.ContainerLoading>
  );
}
export default Loading;
