import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';

import { RootStackParamList } from '~/routes/types';

import {
  Form,
  Header,
  Container,
  BottomLine,
  HeaderText,
  BackButton,
  BackButtonIcon,
  IconPickerSelect,
  LabelPickerSelect,
  pickerSelectStyles,
  ContainerHeaderText,
} from './styles';

import MyStatusBar from '~/components/MyStatusBar';
import TextInputEdit from '~/components/TextInputEditProfile';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';
import pencilIcon from '~/assets/icons/pencil.png';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '~/styles/theme';

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  telephone: yup
    .number()
    .positive('O campo deve ser positivo.')
    .integer('O campo deve ser um número inteiro.')
    .min(10)
    .max(12),
  accountType: yup.string(),
});

interface IFormData {
  email: string;
  telephone: string;
  accountType: string;
}

const EditAccountInfo = () => {
  const { goBack, getParent } = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    getParent()?.setOptions({tabBarStyle: { display: 'none' }});
    return () => getParent()?.setOptions({tabBarStyle: {opacity: 0.75,
      borderTopWidth: 0,height: RFValue(getBottomSpace() + 75),backgroundColor: theme.colors.purple[800],}});
  }, []);

  const {
    control,
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
            <HeaderText>Informações da conta</HeaderText>
          </ContainerHeaderText>
        </Header>

        <Form>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputEdit
                autoCorrect={false}
                label="Email:"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.email}
                icon={pencilIcon}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputEdit
                autoCorrect={false}
                label="Telefone:"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors?.telephone}
                countryCode="55+"
                icon={pencilIcon}
              />
            )}
            name="telephone"
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
                    { label: 'Pessoal', value: 'pessoal' },
                    { label: 'Negócios', value: 'negocios' },
                  ]}
                  Icon={() => {
                    return <IconPickerSelect>x</IconPickerSelect>;
                  }}
                />
                <BottomLine />
              </>
            )}
            name="accountType"
          />
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default EditAccountInfo;
