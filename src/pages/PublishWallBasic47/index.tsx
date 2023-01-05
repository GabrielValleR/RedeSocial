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
  ContainerLabel,
  ContainerTextInputEdit,
  TextIcon,
  BottomLine,
  ContainerInput,
  LabelSmall,
  ImageProfile,
  ContainerImage,
} from './styles';

import MyStatusBar from '~/components/MyStatusBar';
import TextInputEdit from '~/components/TextInputEditProfile';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';

import api from '~/services/api';
import ButtonSmall from '~/components/ButtonSmall';

const schema = yup.object({
  description: yup
    .string()
    .min(5, 'Mínimo de 10 caracteres')
    .max(20, 'Máximo de 100 caracteres')
    .required(),
  accessibility: yup
    .string()
    .min(5, 'Mínimo de 10 caracteres')
    .max(20, 'Máximo de 100 caracteres')
    .required(),
});

interface IFormData {
  description: string;
  accessibility: string;
  tags: string[];
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

const PublishWallBasic = () => {
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
            <HeaderText>Publicar no mural</HeaderText>
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
                label="Descrição :"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
                multiline
                textIcon={
                  value?.length === undefined ? '0' : value?.length + `${'/30'}`
                }
                maxLength={30}
                error={errors?.description}
              />
            )}
            name="description"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <ContainerAccessibility>
                <ContainerLabel>
                  <Label>Acessibilidade</Label>
                  <LabelSmall>(Texto alternativo)</LabelSmall>
                </ContainerLabel>
                <ContainerTextInputEdit>
                  <ContainerInput>
                    <Input
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      autoCorrect={false}
                      maxLength={100}
                      multiline
                    />
                    <TextIcon>
                      {value?.length === undefined
                        ? '0'
                        : value?.length + `${'/100'}`}
                    </TextIcon>
                  </ContainerInput>
                  <BottomLine />
                  {errors && <ErrorLabel>{errors.accessibility}</ErrorLabel>}
                </ContainerTextInputEdit>
              </ContainerAccessibility>
            )}
            name="accessibility"
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

export default PublishWallBasic;
