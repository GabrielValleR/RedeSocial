import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${theme.colors.white};
`;

export const CoverImage = styled.Image`
  width: 100%;
  height: ${RFValue(100)}px;
`;

export const TitleContainer = styled.View`
  padding: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(18)}px;
  color: ${theme.colors.black};
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.gray[300]};
  margin: ${RFValue(8)}px;
`;

export const BackButton = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const BackButtonIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;

export const ListClicks = styled.ScrollView`
  flex: 1;
  padding: ${RFValue(5)}px;
`;

export const ListContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: ${RFValue(10)}px;
`;

export const ImageClickButton = styled.TouchableOpacity`
  margin: ${RFValue(2)}px;
`;

export const ImageClick = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(8.72)}px;
`;
