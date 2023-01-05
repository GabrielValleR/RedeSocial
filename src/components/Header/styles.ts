import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex-direction: row;
  padding: ${RFValue(20)}px;
`;

export const ActionButton = styled.TouchableOpacity`
`;

export const ActionButtonIcon = styled.Image``;

export const Title = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.black};
  margin-left: ${RFValue(10)}px;
`;
