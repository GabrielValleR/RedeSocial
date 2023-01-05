import React, { useState, useEffect } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '../../routes/types';
import api from '~/services/api';

import {
  ColorMatrix,
  contrast,
  saturate,
  concatColorMatrices,
  brightness,
  temperature
 } from 'react-native-color-matrix-image-filters';

import {
  Container,
  ContainerHeader,
  Image,
  Button,
  TextButton,
  ContainerImage,
  ChangeContainer,
  ContentText,
  Doted,
} from './styles';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';
import Header from '../../components/Header';
import Slider from '../../components/Slider';

interface IAlbum {
  id: number;
  image: string;
  cover: string;
}

interface ISlider {
  name: string;
  minValue: number; 
  maxValue: number; 
  onChange?: () => void;
}

const EditPhoto: React.FC = () => {
  const { goBack, navigate } =
  useNavigation<NavigationProp<RootStackParamList>>();
  
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [settingState, setSettingState] = useState<any>([
    {
      name: 'brightness',
      minValue: 1,
      maxValue: 5,
    },
    {
      name: 'contrast',
      minValue: 1,
      maxValue: 10.0,
    },
    {
      name: 'saturation',
      minValue: 1,
      maxValue: 2,
    },
    {
      name: 'temperature',
      minValue: 0,
      maxValue: 40000.0,
    },
  ]);

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

  const first: any = albums.shift();

  return(
    <Container>
      <ContainerHeader>
        <Header title='Editar' icon={arrowLeftIcon} action={() => goBack} />
        <Button onPress={() => navigate('Profile')}>
          <TextButton>Avançar</TextButton>
        </Button>
      </ContainerHeader>
      <ContainerImage>
        <Doted>
          <ColorMatrix matrix={concatColorMatrices(saturate(1), contrast(1), brightness(1), temperature(0))}>
            <Image source={{ uri: first?.image }} />
          </ColorMatrix>
        </Doted>
      </ContainerImage>
      <ChangeContainer>
      {
        settingState.map((settin: ISlider) => (
          <>
            <ContentText>{settin.name}</ContentText>
            <Slider
              key={settin.name}
              minimum={settin.minValue}
              maximum={settin.maxValue}
            />
          </>
        ))
      }
      </ChangeContainer>
    </Container>
  );
};

export default EditPhoto;

