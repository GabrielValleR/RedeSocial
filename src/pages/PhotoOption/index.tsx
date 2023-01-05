import React, { useState, useCallback } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '~/routes/types';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import {
  Container,
  Touchable,
  ContainerTouchable,
  Text,
  Header,
  BackButton,
  BackButtonIcon,
  ContainerHeaderText,
  HeaderText,
  ContentTouchable,
} from './styles';

import closeIcon from '~/assets/icons/close.png';

interface IoptionsLibrary {
  selectionLimit: number;
  mediaType: any;
  includeBase64: boolean;
}

interface IoptionsCamera {
  saveToPhotos: boolean;
  mediaType: any;
  includeBase64: boolean;
}

const PhotoOption = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pickerResponse, setPickerResponse] = useState<any>(null);

  const onImageLibraryPress = useCallback(() => {
    const optionsLibrary: IoptionsLibrary = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(optionsLibrary, setPickerResponse);
  }, []);

  const onCameraPress = useCallback(() => {
    const optionsCamera: IoptionsCamera = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(optionsCamera, setPickerResponse);
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <BackButtonIcon source={closeIcon} />
        </BackButton>
        <ContainerHeaderText>
          <HeaderText>Novo click</HeaderText>
        </ContainerHeaderText>
      </Header>

      <ContainerTouchable>
        <ContentTouchable>
          <Touchable onPress={onImageLibraryPress}>
            <Text>Abrir Galeria</Text>
          </Touchable>
        </ContentTouchable>
        <ContentTouchable>
          <Touchable onPress={onCameraPress}>
            <Text>Abrir Câmera</Text>
          </Touchable>
        </ContentTouchable>
      </ContainerTouchable>
    </Container>
  );
};

export default PhotoOption;
