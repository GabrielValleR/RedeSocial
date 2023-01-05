import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${theme.colors.white};
`;

export const Caption = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16.59)}px;
  color: ${theme.colors.black};
  padding: 5px ${RFValue(20)}px;
`;

export const NotificationsDivider = styled.View`
  width: 100%;
  height: ${RFValue(2)}px;
  background: ${theme.colors.purple[300]};
  margin: ${RFValue(20)}px;
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
  margin-right: ${RFValue(8)}px;
`;

export const UserActionContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Username = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(12)}px;
  color: ${theme.colors.black};
`;

export const ActionText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16.59)}px;
  color: ${theme.colors.black};
`;

export const ClickImage = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(12)}px;
`;
