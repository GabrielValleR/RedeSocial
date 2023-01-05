import { View, ViewProps, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})`
  margin-top: ${RFValue(40)}px;
  padding: ${RFValue(20)}px;
  background: ${theme.colors.white};
`;

export const BackButtonIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${RFValue(28)}px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
})``;

export const ContainerHeaderText = styled.View`
  margin-left: ${RFValue(20)}px;
`;

export const HeaderText = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
`;

export const ChangeAvatarTouchable = styled.TouchableOpacity``;

export const UserContainer = styled.View`
  flex-direction: column;
  margin: ${RFValue(25)}px 0;
  justify-content: space-around;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  border-radius: ${RFValue(20)}px;
`;

export const ChangeProfilePhotoText = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.purple[600]};
  margin-top: ${RFValue(15)}px;
`;

export const ContainerInput = styled.View``;

export const Form = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(83)}px;
`;

export const BottomLineImage = styled(View).attrs<ViewProps>({
  placeholderTextColor: theme.colors.black,
  borderBottomColor: '#7879F1',
  borderBottomWidth: 1.5,
})``;

export const BottomLine = styled(View).attrs<ViewProps>({
  placeholderTextColor: theme.colors.black,
  borderBottomColor: '#D1D1D2',
  borderBottomWidth: 1.5,
})``;

export const LabelPickerSelect = styled.Text`
  margin-top: ${RFValue(16)}px;
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.gray[300]};
`;

export const IconPickerSelect = styled.Text`
  margin-top: ${RFValue(8)}px;
  font-family: ${theme.fonts.poppins.bold};
  font-size: ${RFValue(18)}px;
  color: ${theme.colors.black};
`;

export const ContainerButton = styled.View`
  margin-top: ${RFValue(14)}px;
  margin-bottom: ${RFValue(69)}px;
  width: 100%;
`;

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
