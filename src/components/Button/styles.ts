import {
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import theme from '~/styles/theme';

interface ContainerProps extends TouchableOpacityProps {
  variant?: string;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  background: ${props =>
    props.variant === 'filled' ? theme.colors.purple[800] : theme.colors.white};
  border: 2px solid ${theme.colors.purple[800]};
  width: 100%;
  height: ${RFValue(52)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(8)}px;
  ${props =>
    props.disabled &&
    css`
      background: ${theme.colors.purple[200]};
      border: 2px solid ${theme.colors.purple[200]};
    `}
`;

interface ButtonTextProps extends TextProps {
  variant?: string;
}

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props =>
    props.variant === 'filled' ? theme.colors.white : theme.colors.black};
  font-family: ${theme.fonts.inter.semibold};
  font-size: ${RFValue(20)}px;
`;

export const LoadingSpinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: theme.colors.white,
})``;
