import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '~/routes/types';

import Header from '~/components/Header';
import MyStatusBar from '~/components/MyStatusBar';

import {
  Container,
  FollowButton,
  FollowButtonText,
  UserAvatar,
  UserContainer,
  Username,
} from './styles';

import closeIcon from '~/assets/icons/close.png';
import api from '~/services/api';

interface FollowingType {
  id: number;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

const Following: React.FC = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();

  const [following, setFollowing] = useState();

  useEffect(() => {
    async function loadFollowing() {
      const response = await api.get('/followings');

      if (response.data) {
        setFollowing(response.data.followings);
      }
    }
    loadFollowing();
  }, []);

  const renderFollowing = ({ item }: { item: FollowingType }) => {
    return (
      <UserContainer>
        <UserAvatar source={{ uri: item.avatar }} />
        <Username>{item.username}</Username>
        <FollowButton>
          <FollowButtonText>Seguindo</FollowButtonText>
        </FollowButton>
      </UserContainer>
    );
  };

  return (
    <>
      <MyStatusBar barStyle={'light-content'} />
      <Container>
        <Header title="Seguindo" icon={closeIcon} action={() => goBack()} />

        <FlatList data={following} renderItem={renderFollowing} />
      </Container>
    </>
  );
};

export default Following;
