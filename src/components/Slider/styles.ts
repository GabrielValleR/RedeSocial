import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: ${RFValue(18)}px;
`;

export const Track = styled.View`
  height: ${RFValue(8)}px;
  width: ${RFValue(200)}px;
  background-color: #c4c4c4;
  border-radius: ${RFValue(10)}px;
  margin-left: ${RFValue(122)}px;
  margin-top: ${RFValue(-30)}px;
`;

export const SVGContainer = styled.View`
  margin-left: ${RFValue(120)}px;
  margin-top: ${RFValue(-12)}px;
`;
