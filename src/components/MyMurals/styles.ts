import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

import theme from '~/styles/theme';

export const Container = StyleSheet.create({
  cont: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: RFValue(20),
    padding: RFValue(10),
  }
});

export const MuralItem = styled.TouchableOpacity`
  margin: ${RFValue(15)}px;
`;

export const MuralItemImage = styled.Image`
  width: ${Dimensions.get('window').width - 30}px;
  height: ${RFValue(187)}px;
  border-radius: ${RFValue(10)}px;
`;

export const MuralDetails = styled.View`
  padding: ${RFValue(10)}px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MuralInfo = styled.View``;

export const MuralTitle = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
  margin: ${RFValue(5)}px 0;
`;

export const MuralDescription = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(14)}px;
  color: ${theme.colors.black};
  opacity: 0.5;
`;

export const MuralUsers = styled.View`
  flex-direction: row;
`;

export const MuralUserAvatarButton = styled.TouchableOpacity``;

export const MuralUserAvatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
  border-radius: ${RFValue(12.5)}px;
  margin-left: -10px;
  border-width: ${RFValue(1.75)}px;
  border-color: ${theme.colors.purple[800]};
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: theme.colors.purple[400],
})`
  flex: 1;
  padding: ${RFValue(10)}px;
`;
