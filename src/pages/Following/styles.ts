import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.white};
`;

export const UserContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${RFValue(20)}px;
  margin-bottom: ${RFValue(24)}px;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  border-radius: ${RFValue(18)}px;
  margin-right: ${RFValue(11)}px;
`;

export const Username = styled.Text`
  flex: 1;
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.black};
  padding: ${RFValue(6)}px;
`;

export const FollowButton = styled.TouchableOpacity`
  width: ${RFValue(120)}px;
  height: ${RFValue(28)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${theme.colors.purple[800]};

  justify-content: center;
  align-items: center;
`;

export const FollowButtonText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(12)}px;
  color: ${theme.colors.white};
`;
