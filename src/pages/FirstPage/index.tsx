import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '~/routes/types';

import MyStatusBar from '~/components/MyStatusBar';
import Button from '~/components/Button';

import { Container, FirstPageImage, ButtonsContainer } from './styles';

import logo from '~/assets/images/logo.png';

const FirstPage: React.FC = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <MyStatusBar barStyle="light-content" />
      <Container>
        <FirstPageImage source={logo} resizeMode="contain" />

        <ButtonsContainer>
          <Button variant="filled" onPress={() => navigate('SignUp')}>
            Cadastre-se
          </Button>
          <Button variant="outline" onPress={() => navigate('SignIn')}>
            Entrar
          </Button>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default FirstPage;
