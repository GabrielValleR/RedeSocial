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
  flex: 0.5;
  align-items: center;
  justify-content: center;
`;

export const ForgotPasswordButtonContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex: 0.25;
`;

export const ForgotPasswordText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(19.36)}px;
  color: ${theme.colors.purple[900]};
`;

export const ForgotPasswordButton = styled.TouchableOpacity``;

export const ForgotPasswordButtonText = styled.Text`
  font-family: ${theme.fonts.inter.bold};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(19.36)}px;
  color: ${theme.colors.purple[800]};
`;
