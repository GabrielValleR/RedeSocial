import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'flex-start',
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
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
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
  flex: 0.35;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const PinInputsContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PinInputContainer = styled.View`
  width: ${RFValue(62)}px;
  height: ${RFValue(62)}px;
  background: ${theme.colors.purple[100]};
  border-radius: ${RFValue(15)}px;
`;

export const PinInput = styled.TextInput.attrs({
  maxLength: 1,
})`
  flex: 1;
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(50 / 2)}px;
  text-align: center;
  color: ${theme.colors.purple[400]};
`;

export const ForgotPasswordPinText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(30)}px;
  color: ${theme.colors.purple[400]};
  text-align: center;
`;

export const ForgotPasswordPinTextEmail = styled.Text`
  font-family: ${theme.fonts.inter.semibold};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(30)}px;
  color: ${theme.colors.purple[400]};
`;

export const ForgotPasswordPinTimerContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ForgotPasswordPinTimerText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(24.2)}px;
  color: ${theme.colors.purple[400]};
`;
