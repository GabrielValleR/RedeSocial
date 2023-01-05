import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const ContentHeader = styled.View`
  margin: ${RFValue(60)}px 0;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.black};
  margin-bottom: ${RFValue(20)}px;
`;

export const Princial = styled.Text`
  font-family: montserrat;
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.darkGray};
  line-height: ${RFValue(30)}px;
  margin-bottom: ${RFValue(20)}px;
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;
  align-items: center;
`;

export const CustomButtom = styled.TouchableOpacity`
  width: 100%;
  margin: ${RFValue(14)}px;
  justify-content: space-between;
  flex-direction: row;
  border-color: #d1d1d2;
  border-bottom-width: ${RFValue(2)}px;
`;

export const ActionButtonIcon = styled.Image`
  width: ${RFValue(10)}px;
  height: ${RFValue(20)}px;
`;

export const ViewArrow = styled.View`
  width: ${RFValue(40)}px;
  align-items: center;
  margin-top: 3px;
`;
