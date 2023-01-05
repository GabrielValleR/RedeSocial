import { RFValue } from 'react-native-responsive-fontsize';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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

export const TermsAndConditionsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled(BouncyCheckbox).attrs({
  disableText: true,
  size: 20,
  fillColor: theme.colors.purple[600],
  iconStyle: {
    borderRadius: 4,
    borderWidth: 3,
  },
})`
  margin-right: ${RFValue(5)}px;
`;

export const TermsAndConditionsText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(17)}px;
  color: ${theme.colors.gray[400]};
`;

export const TermsButton = styled.TouchableOpacity`
  height: ${RFValue(17)}px;
`;

export const TermsButtonText = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(17)}px;
  color: ${theme.colors.purple[900]};
`;

export const PolicyButton = styled.TouchableOpacity``;

export const PolicyButtonText = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(17)}px;
  color: ${theme.colors.purple[900]};
`;
