import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '~/routes/types';

import Header from '~/components/Header';
import MyStatusBar from '~/components/MyStatusBar';

import api from '~/services/api';

import {
  Container,
  FollowButton,
  FollowButtonText,
  UserAvatar,
  UserContainer,
  Username,
} from './styles';

import closeIcon from '~/assets/icons/close.png';

interface FollowersType {
  id: number;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

const Followers: React.FC = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();

  const [followers, setFollowers] = useState();

  useEffect(() => {
    async function loadFollowers() {
      const response = await api.get('/followers');

      if (response.data) {
        setFollowers(response.data.followers);
      }
    }
    loadFollowers();
  }, []);

  const renderFollowers = ({ item }: { item: FollowersType }) => {
    return (
      <UserContainer>
        <UserAvatar source={{ uri: item.avatar }} />
        <Username>{item.username}</Username>
        <FollowButton isFollowing={item.isFollowing}>
          <FollowButtonText isFollowing={item.isFollowing}>
            {item.isFollowing ? 'Seguindo' : 'Seguir'}
          </FollowButtonText>
        </FollowButton>
      </UserContainer>
    );
  };

  return (
    <>
      <MyStatusBar barStyle={'light-content'} />
      <Container>
        <Header title="Seguidores" icon={closeIcon} action={() => goBack()} />

        <FlatList data={followers} renderItem={renderFollowers} />
      </Container>
    </>
  );
};

export default Followers;
