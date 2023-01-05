import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  font-family: ${theme.fonts.poppins.medium};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(27)}px;
  color: ${theme.colors.white};
  background-color:${theme.colors.white} ;
  flex:1;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(19)}px;
  color: ${theme.colors.black};
  margin-bottom: ${RFValue(20)}px;
`;


export const ButtonsContainer = styled.View`
  width: 100%;
  padding:${RFValue(16)}px;
  align-items: center;
`;

export const CustomButtom = styled.TouchableOpacity`
  width:100%;
  margin: ${RFValue(14)}px ;
  justify-content: space-between;
  flex-direction: row;
  border-color: #D1D1D2;

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
