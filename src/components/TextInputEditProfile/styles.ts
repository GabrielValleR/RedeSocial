import { TextInput, TextInputProps, View, ViewProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const FormControl = styled.View`
  width: 100%;
  flex: 1;
  margin-top: ${RFValue(25)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.gray[300]};
`;

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextIcon = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.gray[300]};
`;

export const Input = styled(TextInput).attrs<TextInputProps>({})`
  flex: 1;
  padding: 4px;
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(19.36)}px;
  color: ${theme.colors.black};
`;

export const ErrorLabel = styled.Text`
  font-family: ${theme.fonts.roboto.regular};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(15)}px;
  color: ${theme.colors.red[500]};
`;

export const BottomLine = styled(View).attrs<ViewProps>({
  placeholderTextColor: theme.colors.black,
  borderBottomColor: '#D1D1D2',
  borderBottomWidth: 1.5,
})``;

export const CountryCode = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
`;

export const TouchableIcon = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
})``;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;
