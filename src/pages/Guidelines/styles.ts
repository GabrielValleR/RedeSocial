import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Button from '~/components/Button';

import theme from '~/styles/theme';

export const Header = styled.View`
  height: ${RFValue(62)}px;
  background: ${theme.colors.purple[800]};
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: ${theme.fonts.poppins.medium};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(27)}px;
  color: ${theme.colors.white};
`;

export const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.white};
  padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.inter.semibold};
  font-size: ${RFValue(26)}px;
  line-height: ${RFValue(36.4)}px;
  color: ${theme.colors.purple[400]};
  margin-bottom: ${RFValue(10)}px;
`;

export const SectionTitle = styled.Text`
  font-family: ${theme.fonts.inter.semibold};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(25.2)}px;
  color: ${theme.colors.purple[400]};
`;

export const Paragraph = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(22)}px;
  color: ${theme.colors.black};
  opacity: 0.4;
  margin: ${RFValue(10)}px 0;
`;

export const CustomButtom = styled(Button)`
  margin: ${RFValue(30)}px 0;
`;
