import styled from 'styled-components/native';
import Modal from 'react-native-translucent-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { white } from '~/styles/colors';

export const ModalContainer = styled(Modal).attrs({
  animationType: 'fade',
})`
  flex: 1;
`;

export const Container = styled.View`
  height: 100%;
`;

export const ImagePreview = styled.Image`
  width: 100%;
  height: 30%;
  opacity: 0.6;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary.white};
  border-radius: 20px;
  padding: 20px;
  bottom: 50px;
  height: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.family}Bold;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary.red};
`;

export const LabelDate = styled(Title)`
  font-size: 13px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.secondary.grey};
`;

export const NoticeText = styled.Text`
  margin-top: 3%;
  font-family: ${({ theme }) => theme.fonts.primary.family}Regular;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.primary.darkPurple};
  text-align: justify;
`;

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  padding: 30px 0 0 5px;
`;

export const BackIcon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-left',
  color: white,
  size: 50,
})``;
