import styled from 'styled-components/native';

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary.darkGrey};
`;

export const Logo = styled.Image`
  width: 210px;
  height: 47px;
`;
