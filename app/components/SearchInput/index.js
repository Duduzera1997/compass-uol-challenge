import styled from 'styled-components/native';

export default styled.TextInput.attrs({
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
