import { RFValue } from 'react-native-responsive-fontsize';
import { TabBar as RNTabBar } from 'react-native-tab-view';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const BackgroundWhite = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Container = styled.View`
  background: ${theme.colors.white};
  width: 100%;
  height: 100%;
  padding-bottom: ${RFValue(35)}px;
`;

export const TabBar = styled(RNTabBar).attrs({
  indicatorStyle: {
    backgroundColor: theme.colors.purple[800],
    height: 3,
  },
  labelStyle: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: RFValue(16),
    lineHeight: RFValue(19.36),
    color: theme.colors.purple[800],
    textTransform: 'none',
  },
  inactiveColor: theme.colors.gray[300],
})`
  background: ${theme.colors.white};
  margin: 0 ${RFValue(15)}px;
`;

export const Icon = styled.Image`
  margin: ${RFValue(10)}px;
`;
