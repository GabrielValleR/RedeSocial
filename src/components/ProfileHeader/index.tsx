import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '~/routes/types';

import { useHeaderVisible } from '~/hooks/header';

import api from '~/services/api';

import {
  ActionButton,
  AddIcon,
  ButtonConfig,
  ConfigIcon,
  Container,
  DividerLabel,
  Header,
  HeaderButton,
  Name,
  UserAvatar,
  UserBio,
  UserContainer,
  UserDetails,
  UserName,
  UserStats,
  UserStatsLabel,
  ContainerOptions
} from './styles';

import addIcon from '~/assets/icons/add.png';
import cogsIcons from '~/assets/icons/cogs.png';

interface IProfile {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  followers: number;
  following: number;
  clicks: number;
}

const ProfileHeader = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const { getHeaderVisible } = useHeaderVisible();

  const [profile, setProfile] = useState<IProfile | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const response = await api.get('/profiles/1');
      if (response.data) {
        setProfile(response.data.profile);
      }
    }

    loadProfile();
  }, []);
  return (
    <Container visible={getHeaderVisible}>
      <Header>
        <ContainerOptions onPress={() => navigate('PhotoOption')}>
          <AddIcon source={addIcon} />
        </ContainerOptions>
        <UserName>@{profile?.username}</UserName>
        <ButtonConfig onPress={() => navigate('ConfigProfile')}>
          <ConfigIcon source={cogsIcons} />
        </ButtonConfig>
      </Header>

      <UserContainer>
        <UserAvatar source={{ uri: profile?.avatar }} />

        <UserDetails>
          <Name>{profile?.name}</Name>
          <UserBio>{profile?.bio}</UserBio>
          <UserStats>
            <ActionButton onPress={() => navigate('Following')}>
              <UserStatsLabel>
                Seguindo{'\n'}
                {profile?.following}
              </UserStatsLabel>
            </ActionButton>
            <DividerLabel />
            <ActionButton onPress={() => navigate('Followers')}>
              <UserStatsLabel>
                Seguidores{'\n'}
                {profile?.followers}
              </UserStatsLabel>
            </ActionButton>
            <DividerLabel />
            <UserStatsLabel>
              Clicks{'\n'}
              {profile?.clicks}
            </UserStatsLabel>
          </UserStats>
        </UserDetails>
      </UserContainer>

      {/* <HeaderButton onPress={() => navigate('EditProfile')}>
        Editar Perfil
      </HeaderButton> */}
      <HeaderButton onPress={() => navigate('PublishClick')}>
        //PublishClick (Feito)
      </HeaderButton>
      <HeaderButton onPress={() => navigate('PublishWallBasic')}>
        //PublishWallBasic (Feito)
      </HeaderButton>
      <HeaderButton onPress={() => navigate('PublishWallWithParticipants')}>
        //PublishWallWithParticipants(Feito)
      </HeaderButton>
      <HeaderButton onPress={() => navigate('PublishWallComplete')}>
        PublishWallComplete
      </HeaderButton>
    </Container>
  );
};

export default ProfileHeader;
