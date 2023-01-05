import React from "react";

import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import { RootStackParamList } from '~/routes/types';

import Button from '~/components/Button';
import MyStatusBar from '~/components/MyStatusBar';
import TextInput from '~/components/TextInput';
import arrow from '~/assets/icons/arrow-left.png';

import Header from '~/components/Header';
import userCell from '~/assets/icons/cell.png';

import {
  Container,
  Content,
  ViewButton,
  ViewText,
  Title,
  SubTitle

} from './styles';

const schema = yup.object({

  cell: yup.string().min(11).max(11).required('Campo obrigatório'),
});

interface IFormData {

  cell: string;

}

const ChangeCell: React.FC = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const {
    control,
    setValue,
    handleSubmit,
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
        <Header title="Alterar Celular" icon={arrow} action={() => goBack()} />
        <Content>
          <ViewText>
            <Title>
              Enfatizamos a importância de
              obter um número válido para
              conseguir realizar ações
              necessárias no nosso app
            </Title>
            <SubTitle>Telefone atual:</SubTitle>
            <SubTitle>55+ 79 9 8438-2923</SubTitle>
          </ViewText>
          <ViewButton>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  label="Novo número"
                  icon={userCell}
                  placeholder="Digite seu novo número"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors?.cell}
                />
              )}
              name="cell"
            />

            <Button variant="filled" >
            Confirmar alteração de número
            </Button>
          </ViewButton>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  )
}

export default ChangeCell
