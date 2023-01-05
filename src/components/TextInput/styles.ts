import { TextInput, TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import theme from '~/styles/theme';

export const FormControl = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(25)}px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(21.78)}px;
  color: ${theme.colors.purple[400]};
`;

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  border: 1px solid ${theme.colors.purple[100]};
  border-radius: ${RFValue(8)}px;
  height: ${RFValue(52)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${RFValue(8)}px 0;
  background: ${theme.colors.purple[100]};

  ${props =>
    props.isFocused &&
    css`
      border: 1px solid ${theme.colors.gray[200]};
    `}
`;

export const InputIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  margin: 0 ${RFValue(17)}px;
`;

export const Input = styled(TextInput).attrs<TextInputProps>({
  placeholderTextColor: theme.colors.purple[200],
})`
  flex: 1;
  height: 100%;
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(19.36)}px;
  color: ${theme.colors.purple[400]};
`;

export const TogglePasswordButton = styled.TouchableOpacity``;

export const TogglePasswordIcon = styled.Image`
  margin: 0 ${RFValue(17)}px;
`;

export const ErrorLabel = styled.Text`
  font-family: ${theme.fonts.roboto.regular};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(15)}px;
  color: ${theme.colors.red[500]};
`;
