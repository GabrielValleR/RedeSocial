import { RFValue } from 'react-native-responsive-fontsize';
import { TabBar as RNTabBar } from 'react-native-tab-view';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding-bottom: ${RFValue(20)}px;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(62)}px;
  background: ${theme.colors.purple[800]};
  padding: 0 ${RFValue(13)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity``;

export const Icon = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.poppins.medium};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(27)}px;
  color: ${theme.colors.white};
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
`;

export const ContainerStories = styled.View`
  padding: ${RFValue(20)}px 0;
`;
