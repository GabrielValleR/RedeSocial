import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(20)}px;
  background: ${theme.colors.white};
`;

export const FirstPageImage = styled.Image`
  width: ${RFValue(198)}px;
  height: ${RFValue(223)}px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  height: ${RFValue(52 + 52 + 20)}px;
  margin-top: ${RFValue(100)}px;

  justify-content: space-between;
  align-items: center;
`;
