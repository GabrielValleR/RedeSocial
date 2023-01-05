import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DropDownPicker from 'react-native-dropdown-picker';

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
    ErrorLabel,
    Label,
    ContainerAccessibility,
    ContainerTextInputEdit,
    BottomLine,
    ContainerInput,
    ImageProfile,
    LabelPickerSelect,
    ContainerVisibility,
    ContainerImage,
    ContainerProfileImage,
} from './styles';

import MyStatusBar from '~/components/MyStatusBar';
import TextInputEdit from '~/components/TextInputEditProfile';

import arrowLeftIcon from '~/assets/icons/arrow-left.png';
import removeTag from '~/assets/icons/removeTag.png';
import selectedAccounts from '~/assets/icons/selectedAccounts.png';

import api from '~/services/api';
import ButtonSmall from '~/components/ButtonSmall';
import { ScrollView } from 'react-native-gesture-handler';

const schema = yup.object({
    title: yup
        .string()
        .min(5, 'Mínimo de 10 caracteres')
        .max(30, 'Máximo de 30 caracteres')
        .required(),
    accessibility: yup
        .string()
        .min(5, 'Mínimo de 10 caracteres')
        .max(50, 'Máximo de 50 caracteres')
        .required(),
    participants: yup.string(),
    accountType: yup.string(),
});

interface IFormData {
    title: string;
    description: string;
    participants: any;
    visibility: any;
    accountType: string;
}

interface IProfile {
    name: string;
    username: string;
    bio: string;
    avatar: string;
    followers: number;
    following: number;
    clicks: number;
}

const PublishWallComplete = () => {
    const { goBack, navigate } =
        useNavigation<NavigationProp<RootStackParamList>>();
    const [profile, setProfile] = useState<IProfile | null>(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            label: 'Apenas contas selecionadas',
            value: 'selectedAccounts',
            icon: () => <Image source={selectedAccounts} />,
        },
        {
            label: 'Todos',
            value: 'users_all',
        },
    ]);

    const dataImageTest: any = [
        { image: profile?.avatar },
        { image: profile?.avatar },
        { image: profile?.avatar },
        { image: profile?.avatar },
    ];

    useEffect(() => {
        async function loadProfile() {
            const response = await api.get('/profiles/1');
            if (response.data) {
                setProfile(response.data.profile);
            }
        }
        loadProfile();
    }, []);

    const {
        control,
        // handleSubmit,
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
                        <HeaderText>Publicar Mural</HeaderText>
                    </ContainerHeaderText>
                </Header>
                <ScrollView>
                    <ContainerImage>
                        {dataImageTest.map((item: any, index: any) => (
                            <ContainerProfileImage key={index}>
                                <ImageProfile source={{ uri: item.image }} />
                            </ContainerProfileImage>
                        ))}
                    </ContainerImage>
                </ScrollView>

                <Form>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInputEdit
                                label="Título :"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                autoCorrect={false}
                                multiline
                                textIcon={
                                    value?.length === undefined
                                        ? '0'
                                        : value?.length + `${'/30'}`
                                }
                                maxLength={30}
                                error={errors?.title}
                            />
                        )}
                        name="title"
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInputEdit
                                label="Decrição :"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                autoCorrect={false}
                                multiline
                                textIcon={
                                    value?.length === undefined
                                        ? '0'
                                        : value?.length + `${'/50'}`
                                }
                                maxLength={50}
                                error={errors?.title}
                            />
                        )}
                        name="description"
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange } }) => (
                            <ContainerVisibility>
                                <LabelPickerSelect>
                                    Visibilidade :
                                </LabelPickerSelect>
                                <DropDownPicker
                                    style={{
                                        borderWidth: 0,
                                        width: '100%',
                                    }}
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    listMode="SCROLLVIEW"
                                    disableBorderRadius={true}
                                    containerStyle={{
                                        borderBottomColor: '#D1D1D2',
                                        borderBottomWidth: 1.5,
                                        zIndex: 999,
                                    }}
                                    ArrowDownIconComponent={({ style }) => (
                                        <Image
                                            source={removeTag}
                                            style={style}
                                        />
                                    )}
                                    arrowIconContainerStyle={{ width: 10 }}
                                    arrowIconStyle={{
                                        width: 15,
                                        height: 15,
                                        marginTop: 4,
                                    }}
                                    placeholder="Selecione um item"
                                    placeholderStyle={{
                                        fontSize: 16,
                                        lineHeight: 16,
                                    }}
                                    textStyle={{
                                        fontSize: 16.5,
                                        lineHeight: 16.5,
                                        marginTop: 6,
                                    }}
                                />
                            </ContainerVisibility>
                        )}
                        name="accountType"
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur } }) => (
                            <ContainerAccessibility>
                                <Label>Adicionar participantes :</Label>
                                <ContainerTextInputEdit>
                                    <ContainerInput>
                                        <Input
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={'@user        @amigo'}
                                            autoCorrect={false}
                                            maxLength={100}
                                            multiline
                                        />
                                    </ContainerInput>
                                    <BottomLine />
                                    {errors && (
                                        <ErrorLabel>
                                            {errors.participants}
                                        </ErrorLabel>
                                    )}
                                </ContainerTextInputEdit>
                            </ContainerAccessibility>
                        )}
                        name="participants"
                    />
                </Form>
                <ContainerButton>
                    <ButtonSmall
                        variant="filled"
                        onPress={() => navigate('Profile')}>
                        Publicar
                    </ButtonSmall>
                </ContainerButton>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default PublishWallComplete;
