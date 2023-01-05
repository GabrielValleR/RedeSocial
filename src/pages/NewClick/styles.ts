import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.white};
`;

export const Content = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const ViewButton = styled.View`
  width:100%;
  height: ${RFValue(222)}px;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

`;
export const Button = styled.TouchableOpacity`
  width: ${RFValue(267)}px;
  height: ${RFValue(91)}px;
  background: ${theme.colors.purple[275]};
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;

`;

export const TextButton = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.purple[415]};
`;
