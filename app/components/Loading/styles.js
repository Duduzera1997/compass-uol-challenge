import styled from 'styled-components/native';
import { white } from '~/styles/colors';

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 210px;
  height: 47px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: white,
})``;
