import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.white};
`;

export const ContainerHeader = styled.View`
  margin: ${RFValue(60)}px ${RFValue(10)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerImage = styled.View`
  align-items: center;
`;

export const Image = styled.Image`
  width: ${RFValue(240)}px;
  height: ${RFValue(390)}px;
`;

export const Button = styled.TouchableOpacity``;

export const TextButton = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fonts.inter.regular};
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.purple[800]};
`;

export const ContentText = styled.Text`
  font-family: ${theme.fonts.inter.semibold};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(19)}px;
  color: ${theme.colors.black};
`;

export const ChangeContainer = styled.View`
  width: ${RFValue(100)}%;
  margin-top: ${RFValue(16)}px;
  padding: ${RFValue(10)}px;
`;

export const Doted = styled.View`
  border-width: ${RFValue(2)}px;
  border-style: dashed;
  width: ${RFValue(300)}px;
  padding: ${RFValue(14)}px;
  border-color: ${theme.colors.gray[240]}
`;

export const Item = styled.View`
  margin: 0 ${RFValue(5 * 3)}px;
  align-items: center;
`;
