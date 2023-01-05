import { View, ViewProps, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.white};
  padding: ${RFValue(20)}px;
  width: 100%;
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
  justify-content: center;
  margin-top: ${RFValue(45)}px;
  margin-bottom: ${RFValue(100)}px;
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

export const LabelPickerSelect = styled.Text`
  margin-top: ${RFValue(16)}px;
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.gray[300]};
`;

export const IconPickerSelect = styled.Text`
  margin-top: ${RFValue(8)}px;
  font-family: ${theme.fonts.inter.bold};
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.black};
`;

export const BottomLine = styled(View).attrs<ViewProps>({
  placeholderTextColor: theme.colors.black,
  borderBottomColor: '#D1D1D2',
  borderBottomWidth: 1.5,
})``;

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    color: 'black',
  },
});
