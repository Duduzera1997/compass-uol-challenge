import styled from 'styled-components/native';

export const ContainerCard = styled.View`
  height: 120px;
  align-items: center;
  padding-bottom: 10px;
`;

export const CardTouchable = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary.white};
  height: 100%;
  border-radius: 9px;
  flex-direction: row;
`;

export const CardContent = styled.View`
  flex: ${({ flex }) => flex};
  justify-content: flex-start;
  align-items: center;
  padding: 5px 5px 2px 7px;
`;

export const PreviewImage = styled.Image`
  width: 100%;
  height: 95%;
  border-radius: 10px;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 2,
})`
  width: 99%;
  font-size: ${({ size }) => size}px;
  font-family: ${({ theme, fontBold }) =>
    `${theme.fonts.primary.family}${fontBold ? 'Bold' : 'Regular'}`};
  color: ${({ theme }) => theme.colors.secondary.darkGrey};
  padding: 4px 2px 2px 4px;
`;

export const TextDate = styled(Text)`
  padding: 0 2px 2px 4px;
  color: ${({ theme }) => theme.colors.secondary.grey};
`;
