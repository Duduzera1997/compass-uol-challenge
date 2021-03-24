import styled from 'styled-components/native';
import { white } from '~/styles/colors';

export const ContainerListHelper = styled.View`
  margin-top: 5%;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.primary.family}Regular;
  color: ${({ theme }) => theme.colors.secondary.white};
  text-align: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: white,
})``;
