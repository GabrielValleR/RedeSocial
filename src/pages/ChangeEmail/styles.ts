import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.white};
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
  })`
    padding: ${RFValue(20)}px;
    background: ${theme.colors.white};
  `;

export const ViewText = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

`;

export const Title = styled.Text`
  width:${RFValue(322)}px;
  text-align: center;
  font-family: ${theme.fonts.inter.semibold};
  font-size: ${RFValue(22)}px;
  color: ${theme.colors.purple[425]};
  margin-bottom:${RFValue(25)}px;
`;
export const SubTitle = styled.Text`
  font-family: ${theme.fonts.inter.semibold};
  font-size: ${RFValue(16)}px;
  text-align: center;
  margin-bottom: ${RFValue(5)}px;

`;

export const ViewButton= styled.View`
width: 100%;

  align-items: center;
  justify-content: center;
`;
