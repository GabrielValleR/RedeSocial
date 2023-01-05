import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RNPickerSelect from 'react-native-picker-select';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import theme from '~/styles/theme';
import * as yup from 'yup';

import {
  Form,
  Header,
  Container,
  UserAvatar,
  HeaderText,
  BackButton,
  BottomLine,
  UserContainer,
  BackButtonIcon,
  BottomLineImage,
  ContainerButton,
  IconPickerSelect,
  LabelPickerSelect,
  pickerSelectStyles,
  ContainerHeaderText,
  ChangeAvatarTouchable,
  ChangeProfilePhotoText,
} from './styles';

import Button from '~/components/Button';
import TextInputEdit from '~/components/TextInputEditProfile';

import closeIcon from '~/assets/icons/close.png';

import api from '~/services/api';

import { RootStackParamList } from '~/routes/types';

const schema = yup.object({
  name: yup.string().min(4).max(15).required(),
  username: yup.string().min(4).max(15).required(),
  biography: yup.string(),
});

interface IProfile {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  followers: number;
  following: number;
  clicks: number;
}

interface IFormData {
  name: string;
  username: string;
  biography: string;
  gender: string;
}

const EditProfile = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const { goBack, navigate, getParent } =
    useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    getParent()?.setOptions({tabBarStyle: { display: 'none' }});
    return () => getParent()?.setOptions({tabBarStyle: {opacity: 0.75,
      borderTopWidth: 0,height: RFValue(getBottomSpace() + 75),backgroundColor: theme.colors.purple[800],}});
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  useEffect(() => {
    async function loadProfile() {
      const response = await api.get('/profiles/1');
      if (response.data) {
        setProfile(response.data.profile);
      }
    }

    loadProfile();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const grantedGallery = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permissão da Galeria de fotos',
          message: 'O aplicativo precisa de acesso às suas fotos',
          buttonNeutral: 'Pergunte-me mais tarde',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permissão da Câmera do aplicativo',
          message: 'O aplicativo precisa de acesso à sua câmera',
          buttonNeutral: 'Pergunte-me mais tarde',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (
        grantedGallery === PermissionsAndroid.RESULTS.GRANTED &&
        granted === PermissionsAndroid.RESULTS.GRANTED
      ) {
        return navigate('PhotoOption');
      } else {
        console.log('Permissão de Câmera negada');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <Container showsVerticalScrollIndicator={false}>
        <Header>
          <BackButton onPress={goBack}>
            <BackButtonIcon source={closeIcon} />
          </BackButton>
          <ContainerHeaderText>
            <HeaderText>Editar Perfil</HeaderText>
          </ContainerHeaderText>
        </Header>
        <UserContainer>
          <ChangeAvatarTouchable onPress={requestCameraPermission}>
            <UserAvatar source={{ uri: profile?.avatar }} />
          </ChangeAvatarTouchable>
          <ChangeAvatarTouchable onPress={requestCameraPermission}>
            <ChangeProfilePhotoText>
              Alterar foto de perfil
            </ChangeProfilePhotoText>
            <BottomLineImage />
          </ChangeAvatarTouchable>
        </UserContainer>

        <Form>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputEdit
                autoCorrect={false}
                label="Nome :"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.name}
              />
            )}
            name="name"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputEdit
                autoCorrect={false}
                label="Nome de usuário :"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.name}
              />
            )}
            name="username"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputEdit
                autoCorrect={false}
                label="Biografia :"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.name}
                multiline
                maxLength={50}
                textIcon={
                  value?.length === undefined ? '0' : value?.length + `${'/50'}`
                }
              />
            )}
            name="biography"
          />

          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <>
                <LabelPickerSelect>Gênero :</LabelPickerSelect>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  style={pickerSelectStyles}
                  onValueChange={(picker: string) => {
                    onChange(picker);
                  }}
                  items={[
                    { label: 'Masculino', value: 'masculino' },
                    { label: 'Feminino', value: 'feminino' },
                  ]}
                  Icon={() => {
                    return <IconPickerSelect>X</IconPickerSelect>;
                  }}
                />
                <BottomLine />
              </>
            )}
            name="gender"
          />
        </Form>
        <ContainerButton>
          <Button variant="filled" onPress={handleSubmit(onSubmit)}>
            Salvar alterações
          </Button>
        </ContainerButton>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
