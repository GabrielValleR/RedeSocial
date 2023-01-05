import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import api from '~/services/api';

import { RootStackParamList } from '~/routes/types';

import Header from '~/components/Header';
import MyStatusBar from '~/components/MyStatusBar';

import {
  Container,
  FollowButton,
  FollowButtonText,
  LikesContainer,
  LikesCounterContainer,
  LikesCountText,
  LikesDivider,
  LikesIcon,
  UserAvatar,
  UserContainer,
  Username,
} from './styles';

import closeIcon from '~/assets/icons/close.png';
import darkHeartIcon from '~/assets/icons/dark-heart.png';

interface LikesType {
  id: number;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

interface Ilike {
  count: number;
}

const Likes: React.FC = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();

  const [like, setLike] = useState<Ilike | null>(null);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    async function loadLikes() {
      const response = await api.get('/likes/1');

      if (response.data) {
        setLike(response.data.like);
      }
    }

    loadLikes();
  }, []);

  useEffect(() => {
    async function loadFollowers() {
      const response = await api.get('/followers');

      if (response.data) {
        setFollowers(response.data.followers);
        // console.log(response.data.like);
      }
    }

    loadFollowers();
  }, []);

  const renderLikes = ({ item }: { item: LikesType }) => {
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
        <Header title="Curtidas" icon={closeIcon} action={() => goBack()} />
        <LikesCounterContainer>
          <LikesContainer>
            <LikesIcon source={darkHeartIcon} />
            <LikesCountText>{like?.count}</LikesCountText>
          </LikesContainer>
          <LikesDivider />
        </LikesCounterContainer>
        <FlatList
          style={{ paddingTop: 30 }}
          data={followers}
          renderItem={renderLikes}
        />
      </Container>
    </>
  );
};

export default Likes;
