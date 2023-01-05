import React, { useCallback } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RootStackParamList } from '~/routes/types';
import { useAuth } from '~/hooks/auth';

import Button from '~/components/Button';
import MyStatusBar from '~/components/MyStatusBar';
import TextInput from '~/components/TextInput';

import {
  BackButton,
  BackButtonIcon,
  Container,
  ForgotPasswordButton,
  ForgotPasswordButtonContainer,
  ForgotPasswordButtonText,
  ForgotPasswordText,
  Form,
  Header,
  Title,
} from './styles';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';
import lockIcon from '~/assets/icons/lock.png';
import mailIcon from '~/assets/icons/mail.png';

const schema = yup
  .object({
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: yup.string().min(8).max(20).required('Campo obrigatório'),
  })
  .required();

interface IFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();
  const { signIn, loading } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (data: IFormData) => {
      const { email, password } = data;
      await signIn({ email, password });
    },
    [signIn],
  );

  return (
    <>
      <MyStatusBar barStyle={'light-content'} />

      <Container>
        <Header>
          <BackButton onPress={goBack}>
            <BackButtonIcon source={arrowLeftIcon} />
          </BackButton>
          <Title>Entrar</Title>
        </Header>

        <Form>
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

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Senha"
                icon={lockIcon}
                type="password"
                placeholder="Digite sua senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.password}
              />
            )}
            name="password"
          />
        </Form>

        <Button
          variant="filled"
          isLoading={loading}
          onPress={handleSubmit(onSubmit)}>
          Entrar
        </Button>

        <ForgotPasswordButtonContainer>
          <ForgotPasswordText>Esqueceu sua senha ?</ForgotPasswordText>
          <ForgotPasswordButton onPress={() => navigate('ForgotPassword')}>
            <ForgotPasswordButtonText> Recuperar</ForgotPasswordButtonText>
          </ForgotPasswordButton>
        </ForgotPasswordButtonContainer>
      </Container>
    </>
  );
};

export default SignIn;
