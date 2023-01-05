import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.white};
  justify-content: space-around;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: ${RFValue(40)}px ${RFValue(20)}px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackButtonIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;

export const HeaderTitleContainer = styled.View`
  flex: 1;
  margin-left: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(18)}px;
  color: ${theme.colors.black};
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.gray[300]};
  margin-top: ${RFValue(10)}px;
`;

export const ActionButton = styled.TouchableOpacity``;

export const ActionButtonIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
`;

export const ContainerStories = styled.View`
  margin: ${RFValue(45)}px 0;
`;
