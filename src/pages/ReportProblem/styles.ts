import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.ScrollView`
  background: ${theme.colors.white};
  padding: ${RFValue(20)}px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${RFValue(10)}px;
`;

export const Form = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(10)}px;
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
  height: ${RFValue(16)}px;
  padding-bottom: ${RFValue(16)}px;
`;

export const ContainerHeaderText = styled.View`
  margin-left: ${RFValue(20)}px;
  padding-top: ${RFValue(4)}px;
`;

export const HeaderText = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
`;

export const LabelWarningContainer = styled.View`
  flex: 1;
  margin-top: ${RFValue(70)}px;
  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
`;

export const LabelWarningText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(14)}px;
  color: #423f557d;
  text-align: center;
`;

export const LabelReportProblemContainer = styled.View`
  flex: 1;
  margin-top: ${RFValue(35)}px;
`;

export const LabelReportProblemText = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(12.9)}px;
  color: #423f55;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#909090',
})`
  width: 100%;
  height: ${RFValue(95)}px;
  background-color: #f9f9f9;
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(14)}px;
  padding-left: ${RFValue(12)}px;
  padding-right: ${RFValue(12)}px;
  border-radius: ${RFValue(9)}px;
`;

export const ContainerButton = styled.View`
  margin-top: ${RFValue(50)}px;
  flex: 1;
`;

export const ErrorLabel = styled.Text`
  font-family: ${theme.fonts.roboto.regular};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(15)}px;
  color: ${theme.colors.red[500]};
  align-self: flex-start;
  margin-top: ${RFValue(3)}px;
`;
