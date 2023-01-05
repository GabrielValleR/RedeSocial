import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

import Button from '../Button';

interface ContainerProps {
  visible: boolean;
}

export const Container = styled.View<ContainerProps>`
  padding: ${RFValue(20)}px;
  display: ${props => (props.visible ? 'flex' : 'none')};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerOptions = styled.TouchableOpacity`
  align-items: center;
`;

export const CreateOption = styled.TouchableOpacity`
  margin-top: ${RFValue(5)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const CreateOptionText = styled.Text`
  font-family: ${theme.fonts.roboto.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  font-weight: 600;
`;

export const AddIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
`;

export const UserName = styled.Text`
  font-family: ${theme.fonts.roboto.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(21)}px;
`;

export const Name = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(21)}px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  margin: ${RFValue(25)}px 0;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  border-radius: ${RFValue(20)}px;
`;

export const UserDetails = styled.View`
  flex: 1;
  padding-left: ${RFValue(15)}px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const UserBio = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(19.6)}px;
`;

export const UserStats = styled.View`
  flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity``;

export const UserStatsLabel = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.inter.semibold};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(19.6)}px;
`;

export const DividerLabel = styled.View`
  height: ${RFValue(32)}px;
  width: 1px;
  background-color: #c4c4c4;
  margin: 0 ${RFValue(10)}px;
`;

export const ButtonConfig = styled.TouchableOpacity``;

export const ConfigIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
`;

export const HeaderButton = styled(Button)`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(21)}px;
`;
