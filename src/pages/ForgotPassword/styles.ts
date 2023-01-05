import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
})`
  padding: ${RFValue(20)}px;
  background: ${theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex: 0.1;
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
  width: ${RFValue(16)}px;
  height: ${RFValue(22)}px;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: ${RFValue(13)}px;
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
  color: ${theme.colors.black};
`;

export const Form = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const ForgotPasswordImage = styled.Image`
  margin: ${RFValue(50)}px 0;
  width: ${RFValue(107)}px;
  height: ${RFValue(120)}px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(30)}px;
  color: ${theme.colors.black};
  text-align: center;
  margin-bottom: ${RFValue(40)}px;
`;
