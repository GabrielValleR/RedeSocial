import React, { useCallback, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RootStackParamList } from '~/routes/types';

import Button from '~/components/Button';
import TextInput from '~/components/TextInput';
import MyStatusBar from '~/components/MyStatusBar';
import ModalComponent from '~/components/Modal';

import { Container, Form, Title } from './styles';

import lockIcon from '~/assets/icons/lock.png';
// import okAnimation from '~/assets/animations/ok.json';

const schema = yup.object({
  password: yup.string().min(8).max(20).required('Campo obrigatório'),
  confirm_password: yup.string().oneOf([yup.ref('password'), null], 'As senhas nao coincidem'),
});

interface IFormData {
  password: string;
  confirm_password: string;
}

const ResetPassword: React.FC = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const [modalIsVisible, setModalIsVisible] = useState(false);

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
        navigate('SignIn');
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
        <Title>Alteração de senha</Title>

        <Form>
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
                label="Confirme sua nova senha"
                icon={lockIcon}
                placeholder="Digite novamente"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.confirm_password}
              />
            )}
            name="confirm_password"
          />

          <Button variant="filled" onPress={handleSubmit(onSubmit)}>
            Salvar nova senha
          </Button>
        </Form>
      </Container>
      <ModalComponent
        visible={modalIsVisible}
        hide={() => navigate('SignIn') }
        modalVisible={() => setModalIsVisible(oldState => !oldState)}
        title={'Senha alterada com sucesso'}
      />
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;
