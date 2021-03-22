import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ContainerLoading, Logo } from './styles';
import { compassoLogoWhite as compassoLogo } from '~/assets';
import { white } from '~/styles/colors';

function Loading() {
  return (
    <ContainerLoading>
      <Logo source={compassoLogo} testID="component-loading-logo" />
      <ActivityIndicator
        size="small"
        color={white}
        testID="component-loading-item"
      />
    </ContainerLoading>
  );
}
export default Loading;
