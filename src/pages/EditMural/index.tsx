import React, { useState, useEffect } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FlatList } from 'react-native';

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
  Item,
} from './styles';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';
import Header from '../../components/Header';
import Slider from '../../components/Slider';

interface IAlbum {
  id: string;
  image: string;
}

interface ISlider {
  name: string;
  minValue: number; 
  maxValue: number; 
  onChange?: () => void;
}

const EditMural: React.FC = () => {
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
            <FlatList<IAlbum>
              horizontal
              data={albums}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Item>
                  <Image
                    source={{ uri: item.image }}
                  />
                </Item>
              )}
            />
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

export default EditMural;
