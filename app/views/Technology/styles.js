import styled from 'styled-components/native';

export const ContainerTech = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const ContainerByFlex = styled.View`
  flex: ${({ flex }) => flex};
`;
