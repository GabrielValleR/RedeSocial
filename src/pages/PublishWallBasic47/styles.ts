import { TextInput, TextInputProps, View, ViewProps } from 'react-native';
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

export const ContainerImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(40)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const ImageProfile = styled.Image`
  width: ${RFValue(157)}px;
  height: ${RFValue(195)}px;
  border-radius: ${RFValue(10)}px;
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

export const ContainerAccessibility = styled.View`
  justify-content: center;
  margin-top: ${RFValue(10)}px;
`;

export const ContainerLabel = styled.View`
  flex-direction: row;
  flex: 0.5;
  align-items: center;
`;

export const ContainerTextInputEdit = styled.View`
  flex: 0.5;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.gray[300]};
`;

export const LabelSmall = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12)}px;
  color: ${theme.colors.gray[300]};
  margin-left: ${RFValue(10)}px;
`;

export const ContainerButton = styled.View`
  margin-top: ${RFValue(100)}px;
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

export const Input = styled(TextInput).attrs<TextInputProps>({})`
  flex: 1;
  padding: 4px;
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(19.36)}px;
  color: ${theme.colors.black};
`;

export const TextIcon = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.gray[300]};
`;

export const BottomLine = styled(View).attrs<ViewProps>({
  placeholderTextColor: theme.colors.black,
  borderBottomColor: '#D1D1D2',
  borderBottomWidth: 1.5,
})``;

export const ContainerInput = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
