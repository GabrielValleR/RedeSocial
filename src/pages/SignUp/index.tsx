import React, { useCallback } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RootStackParamList } from '~/routes/types';

import Button from '~/components/Button';
import MyStatusBar from '~/components/MyStatusBar';
import TextInput from '~/components/TextInput';
import Checkbox from '~/components/Checkbox';

import {
  BackButton,
  BackButtonIcon,
  Container,
  Form,
  Header,
  PolicyButton,
  PolicyButtonText,
  TermsAndConditionsContainer,
  TermsAndConditionsText,
  TermsButton,
  TermsButtonText,
  Title,
} from './styles';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';
import userIcon from '~/assets/icons/user.png';
import lockIcon from '~/assets/icons/lock.png';
import mailIcon from '~/assets/icons/mail.png';

const schema = yup.object({
  name: yup.string().min(4).max(20).required('Campo obrigatório'),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(8).max(20).required('Campo obrigatório'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas nao coincidem'),
  check: yup
    .bool()
    .default(false)
    .oneOf([true], () => null),
});

interface IFormData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  check: boolean;
}

const SignUp: React.FC = () => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (_data: IFormData) => {
      navigate('SignIn');
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
          <Title>Cadastrar</Title>
        </Header>

        <Form>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                autoCorrect={false}
                label="Nome do usuário"
                icon={userIcon}
                placeholder="Digite seu nome"
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
                type="password"
                autoCorrect={false}
                autoCapitalize="none"
                label="Senha"
                icon={lockIcon}
                placeholder="Digite sua senha"
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
                label="Confirme sua senha"
                icon={lockIcon}
                placeholder="Digite sua senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.confirm_password}
              />
            )}
            name="confirm_password"
          />

          <TermsAndConditionsContainer>
            <Controller
              control={control}
              render={({ field: { value } }) => (
                <Checkbox
                  value={value}
                  onValueChange={() => setValue('check', !value)}
                  error={errors?.check}
                />
              )}
              name="check"
            />
            <TermsAndConditionsText>
              Ao se cadastrar, você concorda com nossos
              <TermsButton>
                <TermsButtonText>Termos de uso</TermsButtonText>
              </TermsButton>
              <TermsButton disabled>
                <TermsAndConditionsText>{' e '}</TermsAndConditionsText>
              </TermsButton>
              <PolicyButton>
                <PolicyButtonText> Política de Privacidade</PolicyButtonText>
              </PolicyButton>
            </TermsAndConditionsText>
          </TermsAndConditionsContainer>
        </Form>

        <Button variant="filled" onPress={handleSubmit(onSubmit)}>
          Cadastrar
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
