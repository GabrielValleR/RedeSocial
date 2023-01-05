import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 ${RFValue(20)}px;
`;

export const SliderTop = styled.View`
  width: 100%;
`;

export const SliderImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: ${RFValue(120)}px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: ${RFValue(40)}px;
  background: ${theme.colors.gray[350]};
  border-radius: ${RFValue(10)}px;
  margin: ${RFValue(20)}px 0;
`;

export const InputIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  padding: 0 ${RFValue(20)}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.gray[450],
})`
  flex: 1;
  height: 100%;
  font-family: ${theme.fonts.roboto.regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
`;

export const ListItemHeader = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ListItemTitle = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
`;

export const ListItemButton = styled.TouchableOpacity``;

export const ListItemButtonText = styled.Text`
  font-family: ${theme.fonts.inter.semibold};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.purple[800]};
`;

export const ExploreImageButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const ExploreImage = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  border-radius: ${RFValue(13)}px;
`;

export const ItemSeparator = styled.View`
  height: ${RFValue(20)}px;
  width: ${RFValue(8)}px;
`;
