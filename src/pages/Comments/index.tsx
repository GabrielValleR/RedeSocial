import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu';

import { RootStackParamList } from '~/routes/types';

import { useAuth } from '~/hooks/auth';
import api from '~/services/api';

import Header from '~/components/Header';
import MyStatusBar from '~/components/MyStatusBar';

import {
  ActionsButton,
  ActionsIcon,
  AuthorName,
  CommentAuthor,
  CommentAvatar,
  CommentContainer,
  CommentsList,
  CommentText,
  Container,
  Content,
  DescriptionContainer,
  DescriptionDivider,
  DescriptionText,
  Input,
  InputCommentContainer,
  ReportOption,
  ReportText,
  SendButton,
  SendButtonIcon,
} from './styles';

import closeIcon from '~/assets/icons/close.png';
import sendIcon from '~/assets/icons/send.png';
import dotsVIcon from '~/assets/icons/dots-v.png';

interface CommentType {
  id: number;
  username: string;
  comment: string;
  avatar: string;
}

const Comment: React.FC = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();
  const { user } = useAuth();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    async function loadComments() {
      try {
        const response = await api.get('/comments');
        if (response.data) {
          setComments(response.data.comments);
        }
      } catch (error) {
        console.warn(error);
      }
    }
    loadComments();
  }, []);

  const renderComment = ({ item }: { item: CommentType }) => {
    return (
      <CommentContainer>
        <CommentAvatar source={{ uri: item.avatar }} />
        <CommentAuthor>
          {item.username}: <CommentText>{item.comment}</CommentText>
        </CommentAuthor>
        <ActionsButton>
          <Menu>
            <MenuTrigger>
              <ActionsIcon source={dotsVIcon} />
            </MenuTrigger>
            <MenuOptions>
              <ReportOption onSelect={() => navigate('ReportPerson')}>
                <ReportText>Denunciar comentário</ReportText>
              </ReportOption>
            </MenuOptions>
          </Menu>
        </ActionsButton>
      </CommentContainer>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={!isKeyboardVisible ? tabBarHeight : 0}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <MyStatusBar barStyle="light-content" />

      <Container>
        <Header title="Comentários" icon={closeIcon} action={() => goBack()} />
        <Content>
          <DescriptionContainer>
            <AuthorName>@thiago</AuthorName>
            <DescriptionText>
              Domingo é dia de comer pastel com a família{' '}
            </DescriptionText>
          </DescriptionContainer>
          <DescriptionDivider />
        </Content>

        <CommentsList>
          <FlatList data={comments} renderItem={renderComment} />
        </CommentsList>

        <InputCommentContainer>
          <CommentAvatar source={{ uri: user.avatar }} />
          <Input placeholder="Adicionar um comentário" />
          <SendButton>
            <SendButtonIcon source={sendIcon} />
          </SendButton>
        </InputCommentContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Comment;
