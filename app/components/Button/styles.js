import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 10%;
  align-items: center;
`;

export const TouchableButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary.red};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 50px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.family}Bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary.white};
`;
