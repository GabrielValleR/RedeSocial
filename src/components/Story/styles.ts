import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

import LazyImage from '../LazyImage';

export const StoryItemContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const StoryImage = styled(LazyImage)`
  width: 100%;
  height: 100%;
  border-radius: ${RFValue(25)}px;
`;

export const StoryHeader = styled.View`
  position: absolute;
  top: 0;
  z-index: 5;
  width: 100%;
  padding: ${RFValue(10)}px ${RFValue(20)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StoryUserDetails = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const StoryUserAvatar = styled.Image`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  border-radius: ${RFValue(18)}px;
  border-width: 1px;
  border-color: ${theme.colors.white};
`;

export const StoryUserName = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(12.45)}px;
  line-height: ${RFValue(16.59)}px;
  color: ${theme.colors.white};
  margin-left: ${RFValue(12)}px;
`;

export const StoryButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
})``;

export const StoryButtonIcon = styled.Image``;

export const StoryFooter = styled.View`
  position: absolute;
  bottom: 0;
  z-index: 5;
  width: 100%;
  height: ${RFValue(65)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.gray[250]};
  padding: ${RFValue(10)}px ${RFValue(20)}px;
  border-bottom-left-radius: ${RFValue(25)}px;
  border-bottom-right-radius: ${RFValue(25)}px;
`;

export const StoryTitle = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(13.48)}px;
  line-height: ${RFValue(16.59)}px;
  color: ${theme.colors.white};
  flex: 0.5;
`;

export const StoryImpressions = styled.View`
  flex-direction: row;
  flex: 0.45;
  justify-content: space-between;
  align-items: center;
`;

export const StoryImpressionsButton = styled.TouchableOpacity``;

export const StoryImpressionsCount = styled.Text`
  font-family: ${theme.fonts.roboto.medium};
  font-size: ${RFValue(12.52)}px;
  line-height: ${RFValue(14.67)}px;
  color: ${theme.colors.white};
`;

export const StoryImpressionsButtonIcon = styled.Image``;
