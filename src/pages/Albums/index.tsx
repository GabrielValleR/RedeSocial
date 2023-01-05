import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '../../routes/types';

import api from '~/services/api';

import MyStatusBar from '~/components/MyStatusBar';

import {
  BackButton,
  BackButtonIcon,
  Container,
  CoverImage,
  ImageClick,
  ImageClickButton,
  ListClicks,
  ListContainer,
  SubTitle,
  Title,
  TitleContainer,
} from './styles';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';

interface IAlbum {
  id: number;
  image: string;
  cover: string;
}

const Albums = () => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();

  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    async function loadAlbums() {
      try {
        const response = await api.get('/albums');
        if (response.data) {
          setAlbums(response.data.albums);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadAlbums();
  }, []);

  return (
    <>
      <MyStatusBar barStyle={'light-content'} />

      <Container>
        <CoverImage source={{ uri: albums[0]?.cover }} />
        <TitleContainer>
          <Title>Mais curtidos</Title>
          <SubTitle>Melhores Clicks</SubTitle>

          <BackButton onPress={goBack}>
            <BackButtonIcon source={arrowLeftIcon} />
          </BackButton>
        </TitleContainer>

        <ListClicks>
          <ListContainer>
            {albums.map(a => (
              <ImageClickButton
                key={a.id}
                onPress={() => {
                  navigate('ViewAlbum');
                }}>
                <ImageClick source={{ uri: a.image }} />
              </ImageClickButton>
            ))}
          </ListContainer>
        </ListClicks>
      </Container>
    </>
  );
};

export default Albums;
