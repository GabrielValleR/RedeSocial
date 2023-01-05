import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const ModalBody = styled.View`
  flex: 0.35;
  background: ${theme.colors.white};
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(6)}px;
`;

export const ModalTitle = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(29.05)}px;
  color: ${theme.colors.purple[600]};
  text-align: center;
  margin-top: ${RFValue(20)}px;
`;
