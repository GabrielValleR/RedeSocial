import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MenuOption as RNMenuOption } from 'react-native-popup-menu';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.white};
`;

export const Content = styled.View`
  padding: 0 ${RFValue(20)}px;
`;

export const DescriptionContainer = styled.View`
  padding: ${RFValue(10)}px;
  margin-top: ${RFValue(15)}px;
`;

export const AuthorName = styled.Text`
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
  margin-bottom: ${RFValue(4)}px;
`;

export const DescriptionText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
  margin-bottom: ${RFValue(4)}px;
`;

export const DescriptionDivider = styled.View`
  width: 100%;
  height: ${RFValue(2)}px;
  background: ${theme.colors.purple[300]};
  margin: ${RFValue(12)}px 0;
`;

export const CommentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(25)}px;
  padding: 0 ${RFValue(20)}px;
`;

export const CommentAvatar = styled.Image`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  border-radius: ${RFValue(18)}px;
`;

export const CommentAuthor = styled.Text`
  margin: ${RFValue(8)}px;
  font-family: ${theme.fonts.inter.medium};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  flex: 1;
  color: ${theme.colors.black};
`;

export const CommentText = styled.Text`
  font-family: ${theme.fonts.inter.regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
`;

export const ActionsButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
})``;

export const ActionsIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;

export const ReportOption = styled(RNMenuOption)`
  width: ${RFValue(179)}px;
  margin: ${RFValue(10)}px;
`;

export const ReportText = styled.Text`
  font-family: ${theme.fonts.roboto.medium};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(19.6)}px;
  color: ${theme.colors.red[500]};
`;

export const CommentsList = styled.View`
  flex: 1;
  margin-bottom: ${RFValue(60)}px;
`;

export const InputCommentContainer = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(20)}px;
  background: #f2efef;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#B9AFAF',
})`
  flex: 1;
  margin-left: ${RFValue(20)}px;
  font-family: ${theme.fonts.roboto.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${theme.colors.black};
`;

export const SendButton = styled.TouchableOpacity``;

export const SendButtonIcon = styled.Image``;
