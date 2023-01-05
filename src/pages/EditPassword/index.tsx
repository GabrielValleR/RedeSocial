import React, { useState, useCallback, useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RootStackParamList } from '~/routes/types';

import {
  Form,
  Header,
  Container,
  HeaderText,
  BackButton,
  BackButtonIcon,
  ContainerHeaderText,
} from './styles';

import Button from '~/components/Button';
import MyStatusBar from '~/components/MyStatusBar';
import TextInput from '~/components/TextInput';
import ModalComponent from '~/components/Modal';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';
import lockIcon from '~/assets/icons/lock.png';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '~/styles/theme';

const schema = yup.object({
  password: yup.string().min(4).max(20).required('Campo obrigatório'),
  confirm_password: yup.string().min(4).max(20).required('Campo obrigatório'),
});

interface IFormData {
  password: string;
  confirm_password: string;
}

const EditPassword = () => {
  const { goBack, navigate, getParent } = useNavigation<NavigationProp<RootStackParamList>>();

  const [modalIsVisible, setModalIsVisible] = useState(false);

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

  const onSubmit = useCallback(
    async (_data: IFormData) => {
      setModalIsVisible(oldState => !oldState);

      setTimeout(() => {
        navigate('ConfigProfile')
      }, 2000);
    },
    [navigate],
  );

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
            <HeaderText>Alterar senha</HeaderText>
          </ContainerHeaderText>
        </Header>

        <Form>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                type="password"
                autoCorrect={false}
                autoCapitalize="none"
                label="Senha atual"
                icon={lockIcon}
                placeholder="Digite sua senha atual"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.password}
              />
            )}
            name="password"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                type="password"
                autoCorrect={false}
                autoCapitalize="none"
                label="Nova senha"
                icon={lockIcon}
                placeholder="Digite sua nova senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.confirm_password}
              />
            )}
            name="confirm_password"
          />
        </Form>
        <Button variant="filled" onPress={handleSubmit(onSubmit)}>
          Salvar nova senha
        </Button>
      </Container>
      <ModalComponent
        visible={modalIsVisible}
        hide={() => navigate('ConfigProfile') }
        modalVisible={() => setModalIsVisible(oldState => !oldState)}
        title={'Senha alterada com sucesso'}
      />
    </KeyboardAvoidingView>
  );
};

export default EditPassword;
