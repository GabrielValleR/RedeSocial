import React, { useState, useCallback, useEffect } from 'react';
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
  LabelWarningContainer,
  LabelWarningText,
  LabelReportProblemContainer,
  LabelReportProblemText,
  ErrorLabel,
} from './styles';

import Button from '~/components/Button';
import ModalComponent from '~/components/Modal';
import MyStatusBar from '~/components/MyStatusBar';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '~/styles/theme';

const schema = yup.object({
  comment: yup
    .string()
    .min(10, 'Mínimo de 10 caracteres')
    .max(100, 'Máximo de 100 caracteres')
    .required(),
});

interface IFormData {
  comment: string;
}

const ReportProblem = () => {
  const { goBack, navigate, getParent } = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    getParent()?.setOptions({tabBarStyle: { display: 'none' }});
    return () => getParent()?.setOptions({tabBarStyle: {opacity: 0.75,
      borderTopWidth: 0,height: RFValue(getBottomSpace() + 75),backgroundColor: theme.colors.purple[800],}});
  }, []);

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
        navigate('ConfigProfile');
      }, 2000);
    },
    [navigate],
  );

  const placeholderComment =
    'Descreve seu problema sendo mais detalhista possível para melhor compreensão da nossa equipe ';

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
            <HeaderText>Relatar um problema</HeaderText>
          </ContainerHeaderText>
        </Header>

        <LabelWarningContainer>
          <LabelWarningText>
            Sinta-se a vontade para relatar o motivo do problema
          </LabelWarningText>
        </LabelWarningContainer>

        <LabelReportProblemContainer>
          <LabelReportProblemText>Relate seu problema</LabelReportProblemText>
        </LabelReportProblemContainer>

        <Form>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder={placeholderComment}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  multiline
                />
                {errors && <ErrorLabel>{errors.comment?.message}</ErrorLabel>}
              </>
            )}
            name="comment"
          />
        </Form>
        <ContainerButton>
          <Button variant="filled" onPress={handleSubmit(onSubmit)}>
            Enviar relato
          </Button>
        </ContainerButton>
        <ModalComponent
          visible={modalIsVisible}
          hide={() => navigate('ConfigProfile') }
          modalVisible={() => setModalIsVisible(oldState => !oldState)}
          title={'Relato enviado com sucesso!!'}
        />
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ReportProblem;
