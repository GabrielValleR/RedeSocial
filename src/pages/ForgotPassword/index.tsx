import React, { useCallback } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RootStackParamList } from '~/routes/types';

import {
  Container,
  Header,
  BackButton,
  BackButtonIcon,
  Title,
  Form,
  ForgotPasswordText,
  ForgotPasswordImage,
} from './styles';

import TextInput from '~/components/TextInput';

import Button from '~/components/Button';
import MyStatusBar from '~/components/MyStatusBar';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';
import mailIcon from '~/assets/icons/mail.png';
import lockImage from '~/assets/images/lock.png';

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

interface IFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (_data: IFormData) => {
      navigate('ForgotPasswordPin');
    },
    [navigate],
  );

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === 'ios'}
      style={{ flex: 1 }}
      behavior="padding">
      <MyStatusBar barStyle={'light-content'} />
      <Container>
        <Header>
          <BackButton onPress={goBack}>
            <BackButtonIcon source={arrowLeftIcon} />
          </BackButton>
          <Title>Recuperar senha</Title>
        </Header>

        <Form>
          <ForgotPasswordImage source={lockImage} />

          <ForgotPasswordText>
            Para recuperar sua senha iremos enviar um código para o e-mail
            cadastrado.
          </ForgotPasswordText>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                label="E-mail"
                icon={mailIcon}
                placeholder="Digite seu E-mail"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.email}
              />
            )}
            name="email"
          />

          <Button variant="filled" onPress={handleSubmit(onSubmit)}>
            Enviar código
          </Button>
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
