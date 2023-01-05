import Check from '@react-native-community/checkbox';
import styled from 'styled-components/native';
import theme from '~/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Checked = styled(Check).attrs({
  size: 20,
  onFillColor: theme.colors.purple[600],
  iconStyle: {
    borderRadius: 4,
    borderWidth: 3,
  },
})`
  margin-right: ${RFValue(5)}px;
`;

export const ErrorLabel = styled.Text`
  font-family: ${theme.fonts.roboto.regular};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(15)}px;
  color: ${theme.colors.red[500]};
`;