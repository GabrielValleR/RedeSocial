import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RootStackParamList } from '~/routes/types';

import {
  BackButton,
  BackButtonIcon,
  Container,
  ContainerHeaderText,
  Form,
  Header,
  HeaderText,
  Input,
  ContainerButton,
  ErrorLabel,
  Label,
  ContainerAccessibility,
  ContainerTextInputEdit,
  TextIcon,
  BottomLine,
  ContainerInput,
  ImageProfile,
  ContainerImage,
} from './styles';

import MyStatusBar from '~/components/MyStatusBar';
import TextInputEdit from '~/components/TextInputEditProfile';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';

import api from '~/services/api';
import ButtonSmall from '~/components/ButtonSmall';

const schema = yup.object({
  title: yup
    .string()
    .min(5, 'Mínimo de 10 caracteres')
    .max(30, 'Máximo de 30 caracteres')
    .required(),
  accessibility: yup
    .string()
    .min(5, 'Mínimo de 10 caracteres')
    .max(50, 'Máximo de 50 caracteres')
    .required(),
  participants: yup.string(),
});

interface IFormData {
  title: string;
  description: string;
  participants: any;
}

interface IProfile {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  followers: number;
  following: number;
  clicks: number;
}

const PublishWallWithParticipants = () => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();
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

  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <MyStatusBar barStyle={'light-content'} />

      <Container>
        <Header>
          <BackButton onPress={goBack}>
            <BackButtonIcon source={arrowLeftIcon} />
          </BackButton>
          <ContainerHeaderText>
            <HeaderText>Publicar Mural</HeaderText>
          </ContainerHeaderText>
        </Header>

        <ContainerImage>
          <ImageProfile source={{ uri: profile?.avatar }} />
        </ContainerImage>

        <Form>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputEdit
                label="Título :"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
                multiline
                textIcon={
                  value?.length === undefined ? '0' : value?.length + `${'/30'}`
                }
                maxLength={30}
                error={errors?.title}
              />
            )}
            name="title"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <ContainerAccessibility>
                <Label>Decrição :</Label>
                <ContainerTextInputEdit>
                  <ContainerInput>
                    <Input
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      autoCorrect={false}
                      maxLength={50}
                      multiline
                    />
                    <TextIcon>
                      {value?.length === undefined
                        ? '0'
                        : value?.length + `${'/50'}`}
                    </TextIcon>
                  </ContainerInput>
                  <BottomLine />
                  {errors && <ErrorLabel>{errors.description}</ErrorLabel>}
                </ContainerTextInputEdit>
              </ContainerAccessibility>
            )}
            name="description"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <ContainerAccessibility>
                <Label>Adicionar participantes :</Label>
                <ContainerTextInputEdit>
                  <ContainerInput>
                    <Input
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={'@seunome'}
                      autoCorrect={false}
                      maxLength={100}
                      multiline
                    />
                  </ContainerInput>
                  <BottomLine />
                  {errors && <ErrorLabel>{errors.participants}</ErrorLabel>}
                </ContainerTextInputEdit>
              </ContainerAccessibility>
            )}
            name="participants"
          />
        </Form>

        <ContainerButton>
          <ButtonSmall variant="filled" onPress={() => navigate('Profile')}>
            Publicar
          </ButtonSmall>
        </ContainerButton>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default PublishWallWithParticipants;
