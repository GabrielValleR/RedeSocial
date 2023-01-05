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

export const Loading = styled.ActivityIndicator.attrs({
  color: theme.colors.purple[400],
})`
  flex: 1;
  padding: ${RFValue(10)}px;
`;
