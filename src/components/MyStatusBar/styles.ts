import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import theme from '~/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${theme.colors.purple[800]};
  width: 100%;
  height: ${getStatusBarHeight() + RFValue(20)}px;
`;

export const SubContainer = styled.SafeAreaView``;

export const CustomStatusBar = styled.StatusBar.attrs({
  backgroundColor: theme.colors.purple[800],
})``;
