import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import theme from '~/styles/theme';
import { StyleSheet } from 'react-native';

export const Container = StyleSheet.create({
  cont: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: RFValue(20),
    padding: RFValue(10),
  }
});

export const ClickItem = styled.TouchableOpacity`
  margin: ${RFValue(8)}px;
`;

export const ClickItemImage = styled.Image`
  width: ${Dimensions.get('window').width / 2 - 20}px;
  height: 255px;
  border-radius: ${RFValue(10)}px;
`;

export const ClickTitle = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
  margin-top: ${RFValue(4)}px;
`;

export const ClickDescription = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(14)}px;
  color: ${theme.colors.black};
  opacity: 0.5;
`;

export const ClickUserContainer = styled.View`
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  flex-direction: row;
`;

export const ClickUserAvatarButton = styled.TouchableOpacity``;

export const ClickUserAvatar = styled.Image.attrs({
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
