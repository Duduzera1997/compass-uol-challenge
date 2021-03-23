import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const HeaderTitle = styled.Text`
  font-size: 27px;
  font-family: ${({ theme }) => theme.fonts.primary.family}Bold;
  color: ${({ theme }) => theme.colors.secondary.white};
  padding-top: 15px;
  padding-left: 15px;
  letter-spacing: 2px;
`;

export const DateLabel = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary.family}Regular;
  color: ${({ theme }) => theme.colors.secondary.white};
  padding-top: 2px;
  padding-left: 16px;
`;

export const FilterInput = styled.TextInput.attrs({
  placeholder: 'Busque uma notícia...',
})`
  width: 92%;
  border-radius: 9px;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.secondary.white};
  border-color: ${({ theme }) => theme.colors.secondary.white};
  margin: 10px 0 0 16px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.secondary.darkGrey};
  font-family: ${({ theme }) => theme.fonts.primary.family}Regular;
  font-size: 16px;
`;
