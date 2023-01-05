import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import MyStatusBar from '~/components/MyStatusBar';
import Stories from '~/components/Story';

import api from '~/services/api';

import {
  ActionButton,
  ActionButtonIcon,
  BackButton,
  BackButtonIcon,
  Container,
  ContainerStories,
  Header,
  HeaderTitleContainer,
  SubTitle,
  Title,
} from './styles';

import closeIcon from '~/assets/icons/close.png';
import darkDotsIcon from '~/assets/icons/dark-dots.png';

const ViewAlbum = () => {
  const { goBack } = useNavigation();

  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function loadStories() {
      const response = await api.get('/stories');

      if (response.data) {
        setStories(response.data.stories);
      }
    }
    loadStories();
  }, []);

  return (
    <>
      <MyStatusBar barStyle={'light-content'} />
      <Container>
        <Header>
          <BackButton onPress={goBack}>
            <BackButtonIcon source={closeIcon} />
          </BackButton>

          <HeaderTitleContainer>
            <Title>Mais curtidos</Title>
            <SubTitle>Melhores Clicks</SubTitle>
          </HeaderTitleContainer>

          <ActionButton>
            <ActionButtonIcon source={darkDotsIcon} />
          </ActionButton>
        </Header>

        <ContainerStories>
          <Stories data={stories} />
        </ContainerStories>
      </Container>
    </>
  );
};

export default ViewAlbum;
