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
import mailIcon from '~/assets/icons/mail.png';

import {
    Container,
    Content,
    ViewButton,
    ViewText,
    Title,
    SubTitle

} from './styles';

const schema = yup.object({

    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

interface IFormData {

    email: string;

}

const ChangeEmail: React.FC = () => {
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
                <Header title="Alterar Email" icon={arrow} action={() => goBack()} />
                <Content>
                    <ViewText>
                        <Title>
                            Enfatizamos a importância de obter um email válido para conseguir realizar ações necessárias no nosso app
                        </Title>
                        <SubTitle>Email atual:</SubTitle>
                        <SubTitle>thaysanerys@gmail.com</SubTitle>
                    </ViewText>
                    <ViewButton>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    label="E-mail"
                                    icon={mailIcon}
                                    placeholder="Digite seu novo email"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors?.email}
                                />
                            )}
                            name="email"
                        />
                        <Button variant="filled" >
                        Confirmar alteração de email
                        </Button>
                    </ViewButton>
                </Content>
            </Container>
        </KeyboardAvoidingView>
    )
}

export default ChangeEmail
