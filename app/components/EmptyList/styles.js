import styled from 'styled-components/native';
import { white } from '~/styles/colors';

export const ContainerEmptyList = styled.View`
  flex: 1;
  margin-top: 50%;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.primary.family}Regular;
  color: ${({ theme }) => theme.colors.secondary.white};
  text-align: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: white,
})``;
