import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.white};
  padding: ${RFValue(20)}px;
`;

export const Header = styled.View`
  flex: 0.4;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${RFValue(14)}px;
  margin-bottom: ${RFValue(40)}px;
`;

export const HeaderText = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
})``;

export const BackButtonIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  padding-bottom: ${RFValue(16)}px;
`;

export const ContainerHeaderText = styled.View`
  margin-left: ${RFValue(20)}px;
`;

export const ContainerTouchable = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${RFValue(80)}px;
`;

export const ContentTouchable = styled.View`
  flex: 0.3;
`;

export const Touchable = styled.TouchableOpacity`
  width: ${RFValue(267)}px;
  height: ${RFValue(91)}px;
  background-color: #efeffc;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(8)}px;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: #353561;
`;
