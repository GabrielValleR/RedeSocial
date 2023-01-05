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

export const AlbumItem = styled.TouchableOpacity`
  margin: ${RFValue(8)}px;
`;

export const AlbumItemImage = styled.Image`
  width: ${Dimensions.get('window').width / 2 - 20}px;
  height: 255px;
  border-radius: ${RFValue(10)}px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: theme.colors.purple[400],
})`
  flex: 1;
  padding: ${RFValue(10)}px;
`;
